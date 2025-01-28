import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { upsertUser } from "@/app/actions/db";
import { generateSerialNumber } from "@/app/util/generate-serial";

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
      const orderId = session.id;

      if (userId) {
        const serialNumber = generateSerialNumber();
        await upsertUser({
          auth_id: userId,
          order_number: orderId,
          serial_number: serialNumber,
          email: session.customer_details?.email || "",
          name: "",
          preserveFields: ["name", "email"],
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return new Response(`Webhook Error: ${err}`, { status: 400 });
  }
}
