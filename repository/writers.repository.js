const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class writersRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getwriters() {
        
        try {
            const writers = await this.db.writers.findAll();
            console.log('writers:::', writers);
            return writers;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createwriters(writers) {
        let data = {};
        try {
            writers.createdate = new Date().toISOString();
            data = await this.db.writers.create(writers);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatewriters(writers) {
        let data = {};
        try {
            writers.updateddate = new Date().toISOString();
            data = await this.db.writers.update({...writers}, {
                where: {
                    id: writers.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletewriters(writersId) {
        let data = {};
        try {
            data = await this.db.writers.destroy({
                where: {
                    id: writersId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new writersRepository();