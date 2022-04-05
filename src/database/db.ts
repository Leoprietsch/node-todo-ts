import mysql from "mysql2/promise";
import { Sequelize } from "sequelize";

initialize();

async function initialize() {
  const connection = await mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${process.env.DATABASE_NAME};`
  );
}

export const db = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
  }
);
