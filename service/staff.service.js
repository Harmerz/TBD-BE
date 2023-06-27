const staffRepository  = require('../repository/staff.repository');

class staffervice {

    constructor() {}

    async getstaff() {
        return await staffRepository.getstaff();
    }

    async createstaff(staff) {
        return await staffRepository.createstaff(staff);
    }

    async updatestaff(staff) {
        return await staffRepository.updatestaff(staff);
    }

    async deletestaff(staffId) {
        return await staffRepository.deletestaff(staffId);
    }

}

module.exports = new staffervice();