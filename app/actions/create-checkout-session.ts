"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-12-18.acacia",
});

export async function createCheckoutSession() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Fader Keys Software",
          },
          unit_amount: 2499, // $24.99
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    client_reference_id: userId,
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  });

  redirect(session.url!);
}
