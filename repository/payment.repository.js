const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class paymentRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getpayment() {
    try {
      const payment = await this.db.payment.findAll();
      return payment;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async createpayment(payment) {
    let data = {};
    try {
      data = await this.db.payment.create(payment);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updatepayment(payment) {
    let data = {};
    try {
      data = await this.db.payment.update(
        { ...payment },
        {
          where: {
            paymentID: payment.id,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deletepayment(paymentId) {
    let data = {};
    try {
      data = await this.db.payment.destroy({
        where: {
          paymentID: paymentId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new paymentRepository();
