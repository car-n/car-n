\connect template1;
DROP DATABASE IF EXISTS surges;
CREATE DATABASE surges;
\connect surges;

CREATE TABLE surgeByZip (
  id SERIAL PRIMARY KEY,
  zipcode INTEGER NOT NULL,
  surge DECIMAL(6, 5) NOT NULL,
  updated timestamp NOT NULL
  );