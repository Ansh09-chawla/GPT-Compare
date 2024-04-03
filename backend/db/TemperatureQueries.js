import { pgDatabase } from "../config/DatabaseConfig";

// Retrieve all temperatures
export const getAllTemperatures = async () => {
  try {
    const query = "SELECT * FROM temperatures";
    const result = await pgDatabase.query(query);

    return result.rows;
  } catch (error) {
    console.error("Error querying the temperatures table", error);
    throw error;
  }
};

// Overwrite the temperatures table with a new list
export const overwriteTemperatures = async (temperatures) => {
  try {
    // Start transaction
    await pgDatabase.query("BEGIN");

    // Delete all current entries
    await pgDatabase.query("DELETE FROM temperatures");

    // Insert new temperatures ensuring the list is not empty
    if (temperatures.length === 0) {
      throw new Error("Temperature list cannot be empty.");
    }

    for (const temperature of temperatures) {
      await pgDatabase.query(
        "INSERT INTO temperatures (temperature) VALUES ($1)",
        [temperature]
      );
    }

    // Commit transaction
    await pgDatabase.query("COMMIT");
  } catch (error) {
    await pgDatabase.query("ROLLBACK");
    console.error("Error overwriting the temperatures table", error);
    throw error;
  }
};
