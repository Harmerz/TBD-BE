const { Sequelize, Model, DataTypes } = require("sequelize");
const logger = require("../logger/api.logger");

const connect = () => {
  const hostName = process.env.HOST;
  const userName = process.env.USER;
  const password = process.env.PASSWORD;
  const database = process.env.DB;
  const dialect = process.env.DIALECT;

  const sequelize = new Sequelize(database, userName, password, {
    host: hostName,
    dialect: dialect,
    operatorsAliases: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 20000,
      idle: 5000,
    },
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  db.user = require("../model/user.model")(sequelize, DataTypes, Model);
  db.address = require("../model/address.model")(sequelize, DataTypes, Model);
  db.store = require("../model/store.model")(sequelize, DataTypes, Model);
  db.book = require("../model/book.model")(sequelize, DataTypes, Model);
  db.inventory = require("../model/inventory.model")(
    sequelize,
    DataTypes,
    Model
  );
  db.payment = require("../model/payment.model")(sequelize, DataTypes, Model);
  db.staff = require("../model/staff.model")(sequelize, DataTypes, Model);
  db.writers = require("../model/writers.model")(sequelize, DataTypes, Model);

  return db;
};

module.exports = {
  connect,
};
