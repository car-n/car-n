DROP DATABASE CARN;

CREATE DATABASE IF NOT EXISTS CARN;

\c CARN;

Drop table if exists passengers;
Drop table if exists bookings;

CREATE TABLE passengers (
  id INT(11) UNIQUE NOT NULL,
  lat INT(8) NOT NULL,
  lon INT(8) NOT NULL,
  last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  p_id INT REFERENCES passengers(id),
  d_id INT REFERENCES drivers(id),
  price INT(6) NOT NULL,
  rate INT(2) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);