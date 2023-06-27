const addresservice  = require('../service/address.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getaddress() {
        logger.info('Controller: getaddress')
        return await addresservice.getaddress();
    }

    async createaddress(address) {
        logger.info('Controller: createaddress', address);
        return await addresservice.createaddress(address);
    }

    async updateaddress(address) {
        logger.info('Controller: updateaddress', address);
        return await addresservice.updateaddress(address);
    }

    async deleteaddress(addressId) {
        logger.info('Controller: deleteaddress', addressId);
        return await addresservice.deleteaddress(addressId);
    }
}
module.exports = new TodoController();