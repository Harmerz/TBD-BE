
module.exports = (sequelize, DataTypes, Model) => {

    class book extends Model {}

    book.init({
        // Model attributes are defined here
        bookID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        WriterID: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'Writer',
                key: 'WriterID'
            }
            // allowNull defaults to true
        },
        price: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        StoreID: {
            type: DataTypes.INTEGER,
            reference:
            {
                model: 'store',
                key: 'storeID'
            }
            // allowNull defaults to true
        },
        ReleaseDate: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        Description: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        Publisher: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },

      }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'book' // We need to choose the model name
      });
      
      return book;
}
