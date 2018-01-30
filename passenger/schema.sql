DROP DATABASE IF EXISTS carn;

CREATE DATABASE carn;

Drop table if exists passengers;
Drop table if exists drivers;
Drop table if exists bookings;

CREATE TABLE passengers (
  id INT UNIQUE NOT NULL,
  lat INT NOT NULL,
  lon INT NOT NULL,
  last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE drivers (
  id INT UNIQUE NOT NULL,
  lat INT NOT NULL,
  lon INT NOT NULL
);

CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  p_id INT REFERENCES passengers(id),
  d_id INT REFERENCES drivers(id),
  price INT NOT NULL,
  rate INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);