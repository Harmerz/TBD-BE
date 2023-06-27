
module.exports = (sequelize, DataTypes, Model) => {

    class address extends Model {}

    address.init({
        // Model attributes are defined here
        addressID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        address2: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        City: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        PostalZip: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'address' // We need to choose the model name
      });
      
      return address;
}
