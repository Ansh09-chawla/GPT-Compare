import Pool from "pg";

export const pgDatabase = new Pool({
	user: "",
	host: "",
	database: "",
	password: "",
	port: "",
});
