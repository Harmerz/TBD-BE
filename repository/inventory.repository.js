const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class inventoryRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getinventory() {
    try {
      const inventory = await this.db.inventory.findAll();
      console.log("inventory:::", inventory);
      return inventory;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createinventory(inventory) {
    let data = {};
    try {
      data = await this.db.inventory.create(inventory);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateinventory(inventory) {
    let data = {};
    try {
      inventory.updateddate = new Date().toISOString();
      data = await this.db.inventory.update(
        { ...inventory },
        {
          where: {
            inventoryID: inventory.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteinventory(inventoryId) {
    let data = {};
    try {
      data = await this.db.inventory.destroy({
        where: {
          inventoryID: inventoryId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new inventoryRepository();
