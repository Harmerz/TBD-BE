const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class addressRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getaddress() {
    try {
      const address = await this.db.address.findAll();
      console.log("address:::", address);
      return address;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createaddress(address) {
    let data = {};
    try {
      data = await this.db.address.create(address);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateaddress(address) {
    let data = {};
    try {
      address.updateddate = new Date().toISOString();
      data = await this.db.address.update(
        { ...address },
        {
          where: {
            addressID: address.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteaddress(addressId) {
    let data = {};
    try {
      data = await this.db.address.destroy({
        where: {
          addressID: addressId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new addressRepository();
