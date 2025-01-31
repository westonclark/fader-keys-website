import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { updateUserPurchase } from "@/lib/db/users";
import { generateSerialNumber } from "@/lib/utils/generate-serial";
import { sendPurchaseConfirmation } from "@/lib/email/send-email";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get("stripe-signature")!;

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.client_reference_id;
      const paymentIntentId = session.payment_intent as string;

      if (userId) {
        const serialNumber = generateSerialNumber();
        const email = session.customer_details?.email;

        await updateUserPurchase({
          auth_id: userId,
          order_number: paymentIntentId,
          serial_number: serialNumber,
        });

        if (!email) {
          console.error("No email found in checkout session");
          return new Response("No email found in checkout session", {
            status: 400,
          });
        }

        // Send confirmation email to the email provided during checkout
        await sendPurchaseConfirmation({
          email,
          orderNumber: paymentIntentId,
          serialNumber,
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }
}
