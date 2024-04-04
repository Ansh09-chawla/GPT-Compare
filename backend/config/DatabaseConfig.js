import dotenv from "dotenv";
import pg from "pg";
dotenv.config();
const { Pool } = pg;

const pgDatabase = new Pool({
	user: process.env.POSTGRES_USER,
	host: process.env.POSTGRES_HOST,
	database: process.env.POSTGRES_DB,
	password: process.env.POSTGRES_PASSWORD,
	port: process.env.POSTGRES_PORT,
});

export default pgDatabase;
