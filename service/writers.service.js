const writersRepository = require("../repository/writers.repository");

class writerservice {
  constructor() {}

  async getwriters() {
    return await writersRepository.getwriters();
  }

  async createwriters(writers) {
    return await writersRepository.createwriters(writers);
  }

  async updatewriters(writers) {
    return await writersRepository.updatewriters(writers);
  }

  async deletewriters(writersId) {
    return await writersRepository.deletewriters(writersId);
  }
}

module.exports = new writerservice();
