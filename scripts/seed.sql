USE gpt_compare;

-- Populate roles table
INSERT INTO roles (role, description)
VALUES
    ('admin', 'Administrator with full system access'),
    ('user', 'Standard user with limited access');

-- Populate users table
INSERT INTO users (username, password, email, role, preferred_model, preferred_temperature, preferred_max_tokens)
VALUES
    ('admin', 'adminpassword', 'admin@example.com', 'admin', 'GPT-4', 0.7, 1024),
    ('john_doe', 'johndpassword', 'john.doe@example.com', 'user', 'GPT-3', 0.5, 512),
    ('jane_doe', 'janedpassword', 'jane.doe@example.com', 'user', 'GPT-3.5', 0.6, 750);

-- Populate ai_models table
INSERT INTO ai_models (model_id, model_name, description)
VALUES
    ('gpt-3', 'GPT-3', 'Generative Pre-trained Transformer 3, a powerful language model.'),
    ('gpt-3.5', 'GPT-3.5', 'An iteration on GPT-3 with improved capabilities and performance.'),
    ('gpt-4', 'GPT-4', 'The latest in the GPT series with advanced language understanding and generation.');

-- Populate model_allowed_parameters table
INSERT INTO model_allowed_parameters (model_id, parameter_name)
VALUES
    ('gpt-3', 'temperature'),
    ('gpt-3', 'max_tokens'),
    ('gpt-3.5', 'temperature'),
    ('gpt-3.5', 'max_tokens'),
    ('gpt-4', 'temperature'),
    ('gpt-4', 'max_tokens');

-- Example records for comparisons, comparison_inputs, and comparison_model_parameters
-- Note: The tables beyond this point will be used in our app to handle the results of real user input and dynamic data.
--       The following records are for demonstration purposes only.

-- Insert example comparison
INSERT INTO comparisons (user_id, comparison_result)
VALUES
    (1, 'Comparison result between GPT-3 and GPT-4 on generating text.'),
    (2, 'Comparison result between GPT-3 and GPT-3.5 on summarizing text.');

-- Insert example comparison inputs
INSERT INTO comparison_inputs (comparison_id, text, model_id)
VALUES
    (1, 'Generate a blog post about AI advancements.', 'gpt-3'),
    (1, 'Generate a blog post about AI advancements.', 'gpt-4'),
    (2, 'Summarize the article on recent tech trends.', 'gpt-3'),
    (2, 'Summarize the article on recent tech trends.', 'gpt-3.5');

-- Insert example comparison model parameters
INSERT INTO comparison_model_parameters (input_id, parameter_name, parameter_value)
VALUES
    (1, 'temperature', '0.7'),
    (1, 'max_tokens', '500'),
    (2, 'temperature', '0.7'),
    (2, 'max_tokens', '500'),
    (3, 'temperature', '0.5'),
    (3, 'max_tokens', '300'),
    (4, 'temperature', '0.5'),
    (4, 'max_tokens', '300');
