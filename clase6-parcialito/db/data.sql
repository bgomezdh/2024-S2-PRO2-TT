/* CREAR UNA BASE DE DATOS */

CREATE SCHEMA cine_argentino;

/* USAR ESQUEMA */
USE cine_argentino;

/* CREAR TABLA */
CREATE TABLE movies(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    rating DECIMAL(3,1),
    awards INT ,
    release_date DATE
);

/* INSERTAR REGISTROS */

INSERT INTO movies VALUES(DEFAULT, "Pelicula 1", 3.5, 3, "2024-01-01" );