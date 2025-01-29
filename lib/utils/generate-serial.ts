import crypto from "crypto";

export function generateSerialNumber(): string {
  return crypto.randomUUID();
}
