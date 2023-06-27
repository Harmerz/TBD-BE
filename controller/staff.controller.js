const staffervice  = require('../service/staff.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getstaff() {
        logger.info('Controller: getstaff')
        return await staffervice.getstaff();
    }

    async createstaff(staff) {
        logger.info('Controller: createstaff', staff);
        return await staffervice.createstaff(staff);
    }

    async updatestaff(staff) {
        logger.info('Controller: updatestaff', staff);
        return await staffervice.updatestaff(staff);
    }

    async deletestaff(staffId) {
        logger.info('Controller: deletestaff', staffId);
        return await staffervice.deletestaff(staffId);
    }
}
module.exports = new TodoController();