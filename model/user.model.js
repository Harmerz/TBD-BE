
module.exports = (sequelize, DataTypes, Model) => {

    class user extends Model {}

    user.init({
        // Model attributes are defined here
        id: {
          type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
        username: {
          type: DataTypes.STRING
          // allowNull defaults to true
        },
        password: {
          type: DataTypes.STRING
          // allowNull defaults to true
      },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'user' // We need to choose the model name
      });
      
      return user;
}
