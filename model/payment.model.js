module.exports = (sequelize, DataTypes, Model) => {
  class payment extends Model {}

  payment.init(
    {
      // Model attributes are defined here
      paymentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      StaffId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "staff",
          key: "StaffID",
        },
        // allowNull defaults to true
      },
      paymentDate: {
        type: DataTypes.DATE,
        // allowNull defaults to true
      },
      paymentAmount: {
        type: DataTypes.DECIMAL,
        // allowNull defaults to true
      },
      BookId: {
        type: DataTypes.STRING,
        reference: {
          model: "book",
          key: "bookID",
        },
        // allowNull defaults to true
      },
      storeId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "store",
          key: "storeID",
        },
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "payment", // We need to choose the model name\
    }
  );

  return payment;
};
