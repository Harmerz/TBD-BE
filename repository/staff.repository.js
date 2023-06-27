const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class staffRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getstaff() {
        
        try {
            const staff = await this.db.staff.findAll();
            console.log('staff:::', staff);
            return staff;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createstaff(staff) {
        let data = {};
        try {
            staff.createdate = new Date().toISOString();
            data = await this.db.staff.create(staff);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatestaff(staff) {
        let data = {};
        try {
            staff.updateddate = new Date().toISOString();
            data = await this.db.staff.update({...staff}, {
                where: {
                    id: staff.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletestaff(staffId) {
        let data = {};
        try {
            data = await this.db.staff.destroy({
                where: {
                    id: staffId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new staffRepository();