module.exports = function(sequelize, datatypes) {


    let alias = "Movie"; // porque sera llamada en el controller

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: datatypes.INTEGER

        },
        title: {
            type: datatypes.STRING(500)
        },
        rating:{
            type: datatypes.DECIMAL
        },
        awards: {
            type: datatypes.INTEGER
        },
        release_date: {
            type: datatypes.DATE
        },
        length: {
            type: datatypes.INTEGER
        },
        genre_id: {
            type: datatypes.INTEGER
        }
    };

    let config = {
        tablename: "movies", // aca va el nombre exacto del mysql
        timestamps: false, // si quieren traerse los campos de auditoria
        underscored: true //si las columnas tienen un _
    };

    const Movie = sequelize.define( alias, cols, config);
    
    return Movie;
}