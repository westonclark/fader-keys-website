import crypto from "crypto";

export function generateSerialNumber() {
  const prefix = "FK"; // Fader Keys
  const year = new Date().getFullYear();
  // Generate 8 random alphanumeric characters
  const random = Buffer.from(crypto.randomBytes(4))
    .toString("hex")
    .toUpperCase();

  return `${prefix}-${year}-${random}`;
}
