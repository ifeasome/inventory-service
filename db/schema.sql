DROP DATABASE IF EXISTS inventory_db;

CREATE DATABASE inventory_db;

\c inventory_db;

CREATE TABLE platforms (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE models (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  screen_size NUMERIC(3,1) NOT NULL,
  platform_id INTEGER NOT NULL REFERENCES platforms(id) ON DELETE CASCADE
);

CREATE TABLE devices (
  id SERIAL PRIMARY KEY,
  condition SMALLINT NOT NULL CHECK (condition BETWEEN 1 AND 10),
  notes TEXT,
  date_received TIMESTAMP NOT NULL DEFAULT NOW(),
  model_id INTEGER NOT NULL REFERENCES models(id) ON DELETE CASCADE
);