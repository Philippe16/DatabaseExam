import pool from "./config";

export const getUsers = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};
