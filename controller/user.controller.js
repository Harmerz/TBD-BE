const userervice = require("../service/user.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getuser() {
    logger.info("Controller: getuser");
    return await userervice.getuser();
  }

  async loginUser(user) {
    logger.info("Controller: loginUser", user);
    return await userervice.loginUser(user);
  }

  async createuser(user) {
    logger.info("Controller: createuser", user);
    return await userervice.createuser(user);
  }

  async updateuser(user) {
    logger.info("Controller: updateuser", user);
    return await userervice.updateuser(user);
  }

  async deleteuser(userId) {
    logger.info("Controller: deleteuser", userId);
    return await userervice.deleteuser(userId);
  }
}
module.exports = new TodoController();
