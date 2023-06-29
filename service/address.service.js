const addressRepository = require("../repository/address.repository");

class addresservice {
  constructor() {}

  async getaddress() {
    return await addressRepository.getaddress();
  }

  async createaddress(address) {
    return await addressRepository.createaddress(address);
  }

  async updateaddress(address) {
    return await addressRepository.updateaddress(address);
  }

  async deleteaddress(addressId) {
    return await addressRepository.deleteaddress(addressId);
  }
}

module.exports = new addresservice();
