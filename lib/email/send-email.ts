import { Resend } from "resend";
import PurchaseConfirmationEmail from "@/app/emails/purchase-confirmation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPurchaseConfirmation({
  email,
  orderNumber,
  serialNumber,
}: {
  email: string;
  orderNumber: string;
  serialNumber: string;
}) {
  try {
    await resend.emails.send({
      from: "Fader Keys <orders@faderkeys.com>",
      to: email,
      subject: "Your Fader Keys Purchase Confirmation",
      react: PurchaseConfirmationEmail({
        orderNumber,
        serialNumber,
        downloadUrl: "https://www.faderkeys.com/Fader%20Keys%20Installer.zip",
      }),
    });
  } catch (error) {
    console.error("Error sending confirmation email:", error);
  }
}
