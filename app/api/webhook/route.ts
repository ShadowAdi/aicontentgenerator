import { db } from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  const body = await req.text();
  const sig = headers().get("stripe-signature");

  console.log("Stripe signature:", sig);

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK!
    );
    console.log("Stripe event constructed:", event);
  } catch (error) {
    console.error("Error constructing Stripe event:", error);
    return NextResponse.json({ error: "Invalid Signature" }, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  const userId = session?.metadata?.userId;

  console.log("Session metadata userId:", userId);

  if (event.type === "checkout.session.completed") {
    if (!userId) {
      console.error("Invalid session: missing userId");
      return new NextResponse("Invalid session", { status: 400 });
    }

    try {
      const findUserByUserID = await db.user.findUnique({
        where: {
          userId: userId,
        },
      });

      if (!findUserByUserID) {
        await db.user.create({
          data: {
            userId: userId,
            totalCredit: 20000,
          },
        });
        console.log("User created with initial credits");
      } else {
        await db.user.update({
          where: {
            userId: userId,
          },
          data: {
            totalCredit: findUserByUserID.totalCredit + 10000,
          },
        });
        console.log("User credits updated");
      }
    } catch (error) {
      console.error("Error processing user:", error);
      return new NextResponse("User processing error", { status: 500 });
    }
  } else {
    console.log("Unhandled event type:", event.type);
    return new NextResponse("Unhandled event", { status: 200 });
  }

  return new NextResponse("Success", { status: 200 });
}
