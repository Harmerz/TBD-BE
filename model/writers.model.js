module.exports = (sequelize, DataTypes, Model) => {
  class Writer extends Model {}

  Writer.init(
    {
      // Model attributes are defined here
      WriterID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      WriterName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Writer", // We need to choose the model name
    }
  );

  return Writer;
};
