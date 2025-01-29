import { NextResponse } from "next/server";
import PurchaseConfirmationEmail from "@/app/emails/purchase-confirmation";
import { render } from "@react-email/render";

export async function GET() {
  const html = await render(
    PurchaseConfirmationEmail({
      orderNumber: "pi_3Qmk1OF8SUE03ssm1B5zr7nH",
      serialNumber: "780342e0-2369-42fe-b198-3f1360f8c96a",
      downloadUrl: "https://www.faderkeys.com/Fader%20Keys%20Installer.zip",
    })
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
