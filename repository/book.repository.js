const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');


class bookRepository {

    db = {};

    constructor() {
        this.db = connect();
        // For Development
        // this.db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });
    }

    async getbook() {
        
        try {
            const book = await this.db.book.findAll();
            console.log('book:::', book);
            return book;
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    async createbook(book) {
        let data = {};
        try {
            book.createdate = new Date().toISOString();
            data = await this.db.book.create(book);
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async updatebook(book) {
        let data = {};
        try {
            book.updateddate = new Date().toISOString();
            data = await this.db.book.update({...book}, {
                where: {
                    id: book.id
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
    }

    async deletebook(bookId) {
        let data = {};
        try {
            data = await this.db.book.destroy({
                where: {
                    id: bookId
                }
            });
        } catch(err) {
            logger.error('Error::' + err);
        }
        return data;
        return {status: `${data.deletedCount > 0 ? true : false}`};
    }

}

module.exports = new bookRepository();