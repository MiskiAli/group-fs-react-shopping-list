-- database shopping-list

CREATE TABLE items (
id SERIAL PRIMARY KEY,
name VARCHAR(80) NOT NULL,
quantity DECIMAL(7,2),
unit VARCHAR(20)
);

INSERT INTO "items" ("name", "quantity", "unit") 
VALUES ('apples', '5.01', 'pounds'), ('bread', '1', 'loaf');