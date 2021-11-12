CREATE DATABASE password_manager;

-- drop table scripts
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS combinations;

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
    created_at TIMESTAMP DEFAULT Now(),
    UNIQUE (author_id, company_name),
    PRIMARY KEY(entry_id),
    CONSTRAINT f_user
      FOREIGN KEY(author_id) 
	  REFERENCES users(user_id)
);

-- cascade
INSERT INTO users (username, password) VALUES ('demouser', 'Password1!');

INSERT INTO combinations (author_id, username, company_name, pw, strength) VALUES ('c487b22e-7888-492c-aa75-cefe7d831987', 'demouser', 'Facebook', 'Password!Q123', 3);
INSERT INTO combinations (author_id, username, company_name, pw, strength) VALUES ('c487b22e-7888-492c-aa75-cefe7d831987', 'demouser', 'Amazon', 'Password!Q123', 3);
INSERT INTO combinations (author_id, username, company_name, pw, strength) VALUES ('c487b22e-7888-492c-aa75-cefe7d831987', 'demouser', 'Uber', 'Password!Q123', 3);
INSERT INTO combinations (author_id, username, company_name, pw, strength) VALUES ('c487b22e-7888-492c-aa75-cefe7d831987', 'demouser', 'Palantir Technologies', 'Password!Q123', 3);
