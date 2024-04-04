// File: db/ComparisonsQueries.js
import { pgDatabase } from "../config/DatabaseConfig";

export const insertComparison = async (
  userId,
  temp1,
  temp2,
  token1,
  token2,
  modelId1,
  modelId2,
  prompt1,
  prompt2,
  response1,
  response2
) => {
  try {
    const query = `
            INSERT INTO comparisons (user_id, temperature1, temperature2, token1, token2, ai_model_id1, ai_model_id2, prompt1, prompt2, response1, response2) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`;
    const values = [
      userId,
      temp1,
      temp2,
      token1,
      token2,
      modelId1,
      modelId2,
      prompt1,
      prompt2,
      response1,
      response2,
    ];
    const result = await pgDatabase.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error inserting comparison", error);
    throw error;
  }
};

export const getComparisonsByUserId = async (userId) => {
  try {
    const query = "SELECT * FROM comparisons WHERE user_id = $1";
    const values = [userId];
    const result = await pgDatabase.query(query, values);
    return result.rows;
  } catch (error) {
    console.error("Error fetching comparisons for user", error);
    throw error;
  }
};
