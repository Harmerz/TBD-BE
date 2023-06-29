const storeervice = require("../service/store.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getstore() {
    logger.info("Controller: getstore");
    return await storeervice.getstore();
  }

  async getstoreById(storeId) {
    logger.info("Controller: getstoreById", storeId);
    return await storeervice.getstoreById(storeId);
  }

  async createstore(store) {
    logger.info("Controller: createstore", store);
    return await storeervice.createstore(store);
  }

  async updatestore(store) {
    logger.info("Controller: updatestore", store);
    return await storeervice.updatestore(store);
  }

  async deletestore(storeId) {
    logger.info("Controller: deletestore", storeId);
    return await storeervice.deletestore(storeId);
  }
}
module.exports = new TodoController();
