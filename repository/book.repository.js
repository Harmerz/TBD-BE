const { connect } = require("../config/db.config");
const logger = require("../logger/api.logger");

class bookRepository {
  db = {};

  constructor() {
    this.db = connect();
    // For Development
    this.db.sequelize.sync({ force: false }).then(() => {
      console.log("Drop and re-sync db.");
    });
  }

  async getbook() {
    try {
      const book = await this.db.book.findAll();
      return book;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getbookById(bookId) {
    let data = {};
    try {
      data = await this.db.book.findOne({
        where: {
          bookID: bookId,
        },
      });
    } catch (err) {
      console.log(err);
      return [];
    }
    return data;
  }

  async createbook(book) {
    let data = {};

    try {
      data = await this.db.book.create(book);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updatebook(book) {
    let data = {};
    console.log("book:::", book);
    try {
      data = await this.db.book.update(
        { ...book },
        {
          where: {
            bookID: book.bookID,
          },
        }
      );
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deletebook(bookId) {
    let data = {};
    try {
      data = await this.db.book.destroy({
        where: {
          bookID: bookId,
        },
      });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new bookRepository();
