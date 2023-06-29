const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class staffRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getstaff() {
    try {
      const staff = await this.db.staff.findAll();
      return staff;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createstaff(staff) {
    let data = {};
    try {
      data = await this.db.staff.create(staff);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updatestaff(staff) {
    let data = {};
    try {
      data = await this.db.staff.update(
        { ...staff },
        {
          where: {
            StaffID: staff.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deletestaff(staffId) {
    let data = {};
    try {
      data = await this.db.staff.destroy({
        where: {
          StaffID: staffId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new staffRepository();
