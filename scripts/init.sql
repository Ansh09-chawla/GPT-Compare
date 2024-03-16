CREATE DATABASE IF NOT EXISTS gpt_compare;

USE gpt_compare;

-- Enhanced users table with preferences
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(50) NOT NULL,
    role VARCHAR(50) NOT NULL,
    preferred_model VARCHAR(50),
    preferred_temperature DECIMAL(3,2),
    preferred_max_tokens INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create AI models table
DROP TABLE IF EXISTS ai_models;
CREATE TABLE ai_models (
    model_id VARCHAR(50) PRIMARY KEY,
    model_name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Create table to store allowed parameters for each model
DROP TABLE IF EXISTS model_allowed_parameters;
CREATE TABLE model_allowed_parameters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model_id VARCHAR(50) NOT NULL,
    parameter_name VARCHAR(50) NOT NULL,
    CONSTRAINT fk_model_allowed_parameters_model_id FOREIGN KEY (model_id) REFERENCES ai_models(model_id)
);

-- Comparisons Table to only store comparison results and metadata
DROP TABLE IF EXISTS comparisons;
CREATE TABLE comparisons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    comparison_result VARCHAR(4900) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_comparisons_user_id FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table for storing comparison inputs and their respective parameters
DROP TABLE IF EXISTS comparison_inputs;
CREATE TABLE comparison_inputs (
    input_id INT AUTO_INCREMENT PRIMARY KEY,
    comparison_id INT NOT NULL,
    text VARCHAR(4900) NOT NULL,
    model_id VARCHAR(50) NOT NULL,
    CONSTRAINT fk_comparison_inputs_comparison_id FOREIGN KEY (comparison_id) REFERENCES comparisons(id),
    CONSTRAINT fk_comparison_inputs_model_id FOREIGN KEY (model_id) REFERENCES ai_models(model_id)
);

-- Link the model parameters dynamically
DROP TABLE IF EXISTS comparison_model_parameters;
CREATE TABLE comparison_model_parameters (
    id INT AUTO_INCREMENT PRIMARY KEY,
    input_id INT NOT NULL,
    parameter_name VARCHAR(50) NOT NULL,
    parameter_value VARCHAR(50) NOT NULL,
    CONSTRAINT fk_comparison_model_parameters_input_id FOREIGN KEY (input_id) REFERENCES comparison_inputs(input_id)
);

-- Role table if roles are expected to expand or need customization
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
    role VARCHAR(50) PRIMARY KEY,
    description TEXT
);