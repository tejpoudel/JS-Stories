
DROP DATABASE IF EXISTS wishes_db;
CREATE DATABASE wishes_db;

USE wishes_db;

-- Create the table tasks.
CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO wishes (wish) VALUES ('I want to have $10000000000 by next year.');
INSERT INTO wishes (wish) VALUES ('I want to be CEO of Google.');
INSERT INTO wishes (wish) VALUES ('I want to go to Europe tomorrow.');
