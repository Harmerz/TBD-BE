const paymentRepository  = require('../repository/payment.repository');

class paymentervice {

    constructor() {}

    async getpayment() {
        return await paymentRepository.getpayment();
    }

    async createpayment(payment) {
        return await paymentRepository.createpayment(payment);
    }

    async updatepayment(payment) {
        return await paymentRepository.updatepayment(payment);
    }

    async deletepayment(paymentId) {
        return await paymentRepository.deletepayment(paymentId);
    }

}

module.exports = new paymentervice();