module.exports = function (sequelize, DataTypes) {
    var Trail = sequelize.define("Trail", {
        // Giving the Trail model a name of type STRING
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        trailId: {
            type:DataTypes.INTEGER,
            allowNull: false
        },
        lat: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lon: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Trail.associate = function (models) {
        // Associating Trail with Que
        // When an Trail is deleted, also delete any associated Ques
        Trail.hasMany(models.Que, {
            onDelete: "cascade"
        });
    };

    Trail.associate = function (models) {
        // Associating Trail with Favorite
       // When an Trail is deleted, also delete any associated Ques
        Trail.hasMany(models.Favorite, {
            onDelete: "cascade"
        });
    };

    return Trail;
};
