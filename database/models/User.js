module.exports = (sequelize, dataTypes) => {
    let alias = 'users';

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },
        rol: {
            type: dataTypes.STRING(45),
            allowNull: false,
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false,
        },

    }; 

    let config = {
        tablename: 'users',
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;
}