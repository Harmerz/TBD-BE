const inventoryervice  = require('../service/inventory.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getinventory() {
        logger.info('Controller: getinventory')
        return await inventoryervice.getinventory();
    }

    async createinventory(inventory) {
        logger.info('Controller: createinventory', inventory);
        return await inventoryervice.createinventory(inventory);
    }

    async updateinventory(inventory) {
        logger.info('Controller: updateinventory', inventory);
        return await inventoryervice.updateinventory(inventory);
    }

    async deleteinventory(inventoryId) {
        logger.info('Controller: deleteinventory', inventoryId);
        return await inventoryervice.deleteinventory(inventoryId);
    }
}
module.exports = new TodoController();