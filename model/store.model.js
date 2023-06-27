
module.exports = (sequelize, DataTypes, Model) => {

    class store extends Model {}

    store.init({
        // Model attributes are defined here
        storeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        StaffId: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'staff',
                key: 'StaffID'
            }
            // allowNull defaults to true
        },
        addressID: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'address',
                key: 'addressID'
            }
            // allowNull defaults to true
        },
        StoreName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'store' // We need to choose the model name
      });
      
      return store;
}
