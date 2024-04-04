CREATE DATABASE IF NOT EXISTS gpt_compare;

USE gpt_compare;

-- Enhanced users table with preferences
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create AI models table
DROP TABLE IF EXISTS ai_models;
CREATE TABLE ai_models (
    model_id INT AUTO_INCREMENT PRIMARY KEY,
    model_name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Create tokens table
DROP TABLE IF EXISTS tokens;
CREATE TABLE tokens (
    min_value INT,
    max_value INT,
    PRIMARY KEY (min_value, max_value)
);

-- Create temperatures table
DROP TABLE IF EXISTS temperatures;
CREATE TABLE temperatures (
    temperature FLOAT CHECK (temperature >= 0.0 AND temperature <= 1.0),
    PRIMARY KEY (temperature)
);

-- Create Comparisons table
DROP TABLE IF EXISTS comparisons;
CREATE TABLE comparisons (
    comparison_id INT AUTO_INCREMENT PRIMARY KEY,
    user_prompting_id (user_id) REFERENCES users(id),
    temperature1 FLOAT,
    temperature2 FLOAT,
    token1 INT,
    token2 INT,
    ai_model_id1 INT REFERENCES ai_models(model_id),
    ai_model_id2 INT REFERENCES ai_models(model_id),
    prompt1 TEXT,
    prompt2 TEXT,
    response1 TEXT,
    response2 TEXT
);

-- Role table if roles are expected to expand or need customization
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    role VARCHAR(50) PRIMARY KEY,
    description TEXT
);