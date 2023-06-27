const { json } = require('sequelize');
const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class userRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getuser() {
        
        try {
            const user = await this.db.user.findAll();
            console.log('user:::', user);
            return user;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async loginUser(user) {
        let data = {};
        try {
            data = await this.db.user.findOne({
                where: {
                    username: user.username,
                    password: user.password
                }
            });
        } catch (err) {
            console.log(err);
            return [];
        }
        return json(data);
    }


    async createuser(user) {
        let data = {};
        try {
            user.createdate = new Date().toISOString();
            data = await this.db.user.create(user);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updateuser(user) {
        let data = {};
        try {
            user.updateddate = new Date().toISOString();
            data = await this.db.user.update({...user}, {
                where: {
                    id: user.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deleteuser(userId) {
        let data = {};
        try {
            data = await this.db.user.destroy({
                where: {
                    id: userId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new userRepository();