const userRepository = require("../repository/user.repository");

class userervice {
  constructor() {}

  async getuser() {
    return await userRepository.getuser();
  }

  async loginUser(user) {
    return await userRepository.loginUser(user);
  }

  async createuser(user) {
    return await userRepository.createuser(user);
  }

  async updateuser(user) {
    return await userRepository.updateuser(user);
  }

  async deleteuser(userId) {
    return await userRepository.deleteuser(userId);
  }
}

module.exports = new userervice();
