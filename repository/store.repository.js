const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class storeRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getstore() {
    try {
      const store = await this.db.store.findAll();
      return store;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getstoreById(storeId) {
    let data = {};
    try {
      data = await this.db.store.findOne({
        where: {
          storeID: storeId,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
    return data;
  }

  async createstore(store) {
    let data = {};
    try {
      data = await this.db.store.create(store);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updatestore(store) {
    let data = {};
    try {
      data = await this.db.store.update(
        { ...store },
        {
          where: {
            storeID: store.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deletestore(storeId) {
    let data = {};
    try {
      data = await this.db.store.destroy({
        where: {
          storeID: storeId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new storeRepository();
