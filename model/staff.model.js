module.exports = (sequelize, DataTypes, Model) => {
  class staff extends Model {}

  staff.init(
    {
      // Model attributes are defined here
      StaffID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      StaffName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      StaffEmail: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      StaffPhone: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
      UserId: {
        type: DataTypes.INTEGER,
        reference: {
          model: "user",
          key: "id",
        },
        // allowNull defaults to true
      },
      StoreId: {
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
      modelName: "staff", // We need to choose the model name
    }
  );

  return staff;
};
