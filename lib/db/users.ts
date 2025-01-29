import { getDbClient } from "./client";

export async function getUserProducts(userId: string) {
  const sql = getDbClient();
  return await sql`
    SELECT * FROM users
    WHERE auth_id = ${userId}
    ORDER BY created_date DESC
  `;
}

export async function upsertUser({
  auth_id,
  email,
  name,
  order_number,
  serial_number,
  preserveFields = [],
}: {
  auth_id: string;
  email: string;
  name: string;
  order_number: string;
  serial_number: string;
  preserveFields?: string[];
}) {
  const sql = getDbClient();
  return await sql`
    INSERT INTO users (auth_id, email, name, order_number, serial_number)
    VALUES (${auth_id}, ${email}, ${name}, ${order_number}, ${serial_number})
    ON CONFLICT (auth_id) DO
    UPDATE SET
      email = CASE
        WHEN ${preserveFields.includes("email")} THEN users.email
        ELSE EXCLUDED.email
      END,
      name = CASE
        WHEN ${preserveFields.includes("name")} THEN users.name
        ELSE EXCLUDED.name
      END,
      order_number = CASE
        WHEN ${preserveFields.includes("order_number")} THEN users.order_number
        ELSE EXCLUDED.order_number
      END,
      serial_number = CASE
        WHEN ${preserveFields.includes(
          "serial_number"
        )} THEN users.serial_number
        ELSE EXCLUDED.serial_number
      END
    RETURNING *;
  `;
}

export async function deleteUser(auth_id: string) {
  const sql = getDbClient();
  try {
    return await sql`
      DELETE FROM users
      WHERE auth_id = ${auth_id}
    `;
  } catch (err) {
    console.error("Database error in deleteUser:", {
      error: err,
      auth_id,
      timestamp: new Date().toISOString(),
    });
    throw err;
  }
}
