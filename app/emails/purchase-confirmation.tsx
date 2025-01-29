import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

interface PurchaseConfirmationEmailProps {
  orderNumber: string;
  serialNumber: string;
  downloadUrl: string;
}

export default function PurchaseConfirmationEmail({
  orderNumber,
  serialNumber,
  downloadUrl,
}: PurchaseConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto py-8 px-4">
            <Heading className="text-2xl font-bold mb-8 text-center">
              Thank you for purchasing Fader Keys!
            </Heading>

            <Section className="mb-8 text-center">
              <Text className="mb-4">
                Your purchase has been confirmed. Here are your details:
              </Text>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <Text className="mb-2">
                  <strong>Serial Number:</strong>
                </Text>
                <Text className="font-mono">{serialNumber}</Text>
              </div>

              <Text className="mb-4">
                You can download the latest version of Fader Keys using the
                button below:
              </Text>

              <div className="mb-2">
                <Link
                  href={downloadUrl}
                  className="bg-rose-500 text-white px-6 py-3 mt-4 rounded-md font-medium inline-block"
                >
                  Download Fader Keys
                </Link>
              </div>
            </Section>

            <Text className="text-gray-500 text-sm text-center mb-8">
              If you have any questions, please contact us at{" "}
              <Link href="mailto:hello@faderkeys.com" className="text-rose-500">
                hello@faderkeys.com
              </Link>
            </Text>

            <Text className="text-xs text-gray-400 text-center">
              Order #{orderNumber}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
