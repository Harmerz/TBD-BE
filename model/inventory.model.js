
module.exports = (sequelize, DataTypes, Model) => {

    class inventory extends Model {}

    inventory.init({
        // Model attributes are defined here
        inventoryID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        storeId: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'store',
                key: 'storeID'
            }
            // allowNull defaults to true
        },
        bookId: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'book',
                key: 'bookID'
            }
            // allowNull defaults to true
        },

      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'inventory' // We need to choose the model name
      });
      
      return inventory;
}
