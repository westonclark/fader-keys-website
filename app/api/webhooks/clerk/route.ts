import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { upsertUser, deleteUser } from "@/lib/db/users";

export async function POST(req: Request) {
  try {
    // Get the headers
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature");

    if (!svix_id || !svix_timestamp || !svix_signature) {
      console.error("Missing svix headers");
      return new Response("Missing svix headers", { status: 400 });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);

    const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET || "");
    let evt: WebhookEvent;

    try {
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err: any) {
      console.error("Error verifying webhook:", err);
      return new Response(
        `Error verifying webhook: ${err?.message || "Unknown error"}`,
        {
          status: 400,
        }
      );
    }

    // Handle different webhook events
    switch (evt.type) {
      case "user.created": {
        const { id, email_addresses, first_name, last_name } = evt.data;
        const email = email_addresses[0]?.email_address;
        const name = [first_name, last_name].filter(Boolean).join(" ");

        if (email) {
          try {
            await upsertUser({
              auth_id: id,
              email,
              name: name || "",
              order_number: "",
              serial_number: "",
            });
          } catch (err: any) {
            console.error("Error upserting user:", err);
            return new Response(
              `Error upserting user: ${err?.message || "Unknown error"}`,
              {
                status: 500,
              }
            );
          }
        }
        break;
      }

      case "user.updated": {
        const { id, email_addresses, first_name, last_name } = evt.data;
        const email = email_addresses[0]?.email_address;
        const name = [first_name, last_name].filter(Boolean).join(" ");

        if (email) {
          try {
            await upsertUser({
              auth_id: id,
              email,
              name: name || "",
              order_number: "",
              serial_number: "",
              preserveFields: ["order_number", "serial_number"],
            });
          } catch (err: any) {
            console.error("Error updating user:", err);
            return new Response(
              `Error updating user: ${err?.message || "Unknown error"}`,
              {
                status: 500,
              }
            );
          }
        }
        break;
      }

      case "user.deleted": {
        const { id } = evt.data;

        if (!id) {
          return new Response("Missing user ID", { status: 400 });
        }

        try {
          await deleteUser(id);
        } catch (err: any) {
          console.error("Error deleting user:", err);
          return new Response(
            `Error deleting user: ${err?.message || "Unknown error"}`,
            {
              status: 500,
            }
          );
        }
        break;
      }
    }

    return new Response("Success", { status: 200 });
  } catch (err: any) {
    console.error("Unexpected error in webhook handler:", err);
    return new Response(
      `Internal server error: ${err?.message || "Unknown error"}`,
      {
        status: 500,
      }
    );
  }
}
