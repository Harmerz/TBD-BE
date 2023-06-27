const inventoryRepository  = require('../repository/inventory.repository');

class inventoryervice {

    constructor() {}

    async getinventory() {
        return await inventoryRepository.getinventory();
    }

    async createinventory(inventory) {
        return await inventoryRepository.createinventory(inventory);
    }

    async updateinventory(inventory) {
        return await inventoryRepository.updateinventory(inventory);
    }

    async deleteinventory(inventoryId) {
        return await inventoryRepository.deleteinventory(inventoryId);
    }

}

module.exports = new inventoryervice();