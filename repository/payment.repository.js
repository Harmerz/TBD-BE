const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class paymentRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getpayment() {
        
        try {
            const payment = await this.db.payment.findAll();
            console.log('payment:::', payment);
            return payment;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createpayment(payment) {
        let data = {};
        try {
            payment.createdate = new Date().toISOString();
            data = await this.db.payment.create(payment);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatepayment(payment) {
        let data = {};
        try {
            payment.updateddate = new Date().toISOString();
            data = await this.db.payment.update({...payment}, {
                where: {
                    id: payment.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletepayment(paymentId) {
        let data = {};
        try {
            data = await this.db.payment.destroy({
                where: {
                    id: paymentId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new paymentRepository();