const writerservice  = require('../service/writers.service');
const logger = require('../logger/api.logger');

class TodoController {

    async getwriters() {
        logger.info('Controller: getwriters')
        return await writerservice.getwriters();
    }

    async createwriters(writers) {
        logger.info('Controller: createwriters', writers);
        return await writerservice.createwriters(writers);
    }

    async updatewriters(writers) {
        logger.info('Controller: updatewriters', writers);
        return await writerservice.updatewriters(writers);
    }

    async deletewriters(writersId) {
        logger.info('Controller: deletewriters', writersId);
        return await writerservice.deletewriters(writersId);
    }
}
module.exports = new TodoController();