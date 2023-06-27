const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class storeRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getstore() {
        
        try {
            const store = await this.db.store.findAll();
            console.log('store:::', store);
            return store;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createstore(store) {
        let data = {};
        try {
            store.createdate = new Date().toISOString();
            data = await this.db.store.create(store);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatestore(store) {
        let data = {};
        try {
            store.updateddate = new Date().toISOString();
            data = await this.db.store.update({...store}, {
                where: {
                    id: store.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletestore(storeId) {
        let data = {};
        try {
            data = await this.db.store.destroy({
                where: {
                    id: storeId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new storeRepository();