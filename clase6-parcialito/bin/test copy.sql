select * from peliculas; -- OK
select * from actores; -- OK
select nombre, nacionalidad from actores;-- OK
select titulo, anio from peliculas;   -- OK
select * from peliculas where genero = 'Ciencia ficcion'; -- OK
select * from actores where nacionalidad = 'Estadounidense'; -- OK
select anioInicio  from series order by anioInicio Desc; -- OK
select anio from peliculas order by anio asc; -- OK
select * from peliculas where anio between 1995 and 2010;
select * from actores where nombre like 'Chris'; //--> '%Chris%'
select * from actores where  actores limit 5;  -- select * from actores limit 5;
select * from peliculas where peliculas limit 5 offset 2; -- from peliculas limit 5 offset 2;
select nombre from actores As Actornombre; -- select nombre AS ActorNombre from actores ;
select titulos from peliculas as NombrePelicula -- select titulo as NombrePelicula from peliculas;
select * from peliculas where genero = 'Accion'  AND anio > 2000;  -- OK
select * from actores where nacionalidad = 'Estadounidense' AND nombre Like '%Chris%'; -- Que inicie con 'Chris%'
select * from series where genero = 'Fantasia' OR 'Ciencia ficcion'; -- OK
select * from actores where nacionalidad = 'Britanica' OR 'Australiano'; -- OK
select COUNT(*) FROM peliculas; -- OK
select AVG (duracionMinutos) from episodios; -- OK
select COUNT(DISTINCT actores) from actores; -- OK DUDOSO
select max(anio) AND min(anio) from peliculas; -- OK
SELECT   actores.nombre AS nombre_actor,  -- OK
         personajes.nombre AS nombre_personaje FROM actores
  LEFT JOIN actorespeliculas 
    ON actores.actorId = actorespeliculas.actorId
  LEFT JOIN personajes 
    ON actorespeliculas.personajeId = personajes.personajeId;

SELECT series.titulo, temporadas.numero FROM series -- OK DUDOSO
    LEFT JOIN temporadas 
        ON series.serieId = temporadas.serieId;


SELECT actores.nombre AS nombre_actor, actoresPeliculas.personajeId -- OK DUDOSO
FROM actores
    RIGHT JOIN actoresPeliculas 
        ON actores.actorId = actoresPeliculas.actorId; -- OK DUDOSO


SELECT temporadas.numero AS numero_temporada, series.titulo AS titulo_serie FROM temporadas
    RIGHT JOIN series 
        ON temporadas.serieId = series.serieId;  
 
 
 
 
