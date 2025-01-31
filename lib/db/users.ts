import { getDbClient } from "./client";

export async function getUserProducts(userId: string) {
  const sql = getDbClient();
  return await sql`
    SELECT * FROM users
    WHERE auth_id = ${userId}
    ORDER BY created_date DESC
  `;
}

export async function createUserFromClerk({
  auth_id,
  email,
  name,
}: {
  auth_id: string;
  email: string | null;
  name: string | null;
}) {
  const sql = getDbClient();
  try {
    return await sql`
        INSERT INTO users (auth_id, email, name)
        VALUES (${auth_id}, ${email}, ${name})
        RETURNING *
      `;
  } catch (err) {
    console.error("Database error in createUserFromClerk:", {
      error: err,
      auth_id,
      email,
      name,
      timestamp: new Date().toISOString(),
    });
    throw err;
  }
}

export async function updateUserEmail({
  auth_id,
  email,
}: {
  auth_id: string;
  email: string | null;
}) {
  const sql = getDbClient();
  try {
    return await sql`
      UPDATE users
      SET email = ${email}
      WHERE auth_id = ${auth_id}
      RETURNING *
    `;
  } catch (err) {
    console.error("Database error in updateUserProfile:", {
      error: err,
      auth_id,
      email,
      timestamp: new Date().toISOString(),
    });
    throw err;
  }
}

export async function updateUserPurchase({
  auth_id,
  order_number,
  serial_number,
}: {
  auth_id: string;
  order_number: string;
  serial_number: string;
}) {
  const sql = getDbClient();
  try {
    return await sql`
      UPDATE users
      SET order_number = ${order_number}, serial_number = ${serial_number}
      WHERE auth_id = ${auth_id}
      RETURNING *
    `;
  } catch (err) {
    console.error("Database error in updateUserPurchase:", {
      error: err,
      auth_id,
      order_number,
      serial_number,
      timestamp: new Date().toISOString(),
    });
    throw err;
  }
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
