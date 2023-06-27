const storeRepository  = require('../repository/store.repository');

class storeervice {

    constructor() {}

    async getstore() {
        return await storeRepository.getstore();
    }

    async createstore(store) {
        return await storeRepository.createstore(store);
    }

    async updatestore(store) {
        return await storeRepository.updatestore(store);
    }

    async deletestore(storeId) {
        return await storeRepository.deletestore(storeId);
    }

}

module.exports = new storeervice();