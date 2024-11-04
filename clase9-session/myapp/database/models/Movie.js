module.exports = function(sequelize, datatypes) {

    let alias = "Movie";         // alias para llamarlo desde el controller

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
        release_date:{   // guion bajo
            type: datatypes.DATE
        },
        length: {
            type: datatypes.INTEGER
        },
        genre_id:{
            type: datatypes.INTEGER
        }
    }

    let config = {
        tablename: "movies",    //nombre de la tabla
        timestamps: false,
        underscored: true
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genre , {
            as: "genre",             // alias de la relacion
            foreignKey: "genre_id"   // un PK de otra tabla
        })

        Movie.belongsToMany(models.Actor, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie_id",
            otherKey: "actor_id",
            timestamps: false
        })
        
    }

    return Movie;
    
}