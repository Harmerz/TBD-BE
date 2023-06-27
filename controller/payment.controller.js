const paymentervice  = require('../service/payment.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getpayment() {
        logger.info('Controller: getpayment')
        return await paymentervice.getpayment();
    }

    async createpayment(payment) {
        logger.info('Controller: createpayment', payment);
        return await paymentervice.createpayment(payment);
    }

    async updatepayment(payment) {
        logger.info('Controller: updatepayment', payment);
        return await paymentervice.updatepayment(payment);
    }

    async deletepayment(paymentId) {
        logger.info('Controller: deletepayment', paymentId);
        return await paymentervice.deletepayment(paymentId);
    }
}
module.exports = new TodoController();