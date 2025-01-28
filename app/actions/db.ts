"use server";

import { neon } from "@neondatabase/serverless";

export async function getData() {
  const sql = neon(process.env.DATABASE_URL!);
  const data = await sql`...`;
  return data;
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
  const sql = neon(process.env.DATABASE_URL!);

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
      order_number = EXCLUDED.order_number,
      serial_number = EXCLUDED.serial_number
    RETURNING *;
  `;
}

export async function getUserProducts(userId: string) {
  const sql = neon(process.env.DATABASE_URL!);

  return await sql`
    SELECT * FROM users
    WHERE auth_id = ${userId}
    ORDER BY created_date DESC
  `;
}

export async function deleteUser(auth_id: string) {
  const sql = neon(process.env.DATABASE_URL!);

  try {
    console.log("Attempting to delete user:", auth_id);
    const result = await sql`
      DELETE FROM users
      WHERE auth_id = ${auth_id}
    `;
    console.log("Delete result:", result);
    return result;
  } catch (err) {
    console.error("Database error in deleteUser:", {
      error: err,
      auth_id,
      timestamp: new Date().toISOString(),
    });
    throw err;
  }
}
