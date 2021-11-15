-- CREATE DATABASE password_manager;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS combinations;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid DEFAULT 
    uuid_generate_v4(),
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT Now(),
    PRIMARY KEY(user_id) 
);

CREATE TABLE combinations(
    entry_id uuid DEFAULT 
    uuid_generate_v4(),
    author_id uuid NOT NULL,
    username VARCHAR(100) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    pw VARCHAR(255) NOT NULL,
    strength INT NOT NULL,
    removed BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP DEFAULT Now(),
    UNIQUE (author_id, company_name),
    PRIMARY KEY(entry_id),
    CONSTRAINT f_user
      FOREIGN KEY(author_id) 
	  REFERENCES users(user_id)
);

INSERT INTO users (username, password) VALUES ('newUser123', 'Password1!');


