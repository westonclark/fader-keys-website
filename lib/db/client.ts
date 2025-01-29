import { neon } from "@neondatabase/serverless";

export function getDbClient() {
  return neon(process.env.DATABASE_URL!);
}
