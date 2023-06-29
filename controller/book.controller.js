const bookervice = require("../service/book.service");
const logger = require("../logger/api.logger");

class TodoController {
  async getbook() {
    logger.info("Controller: getbook");
    return await bookervice.getbook();
  }

  async getbookById(bookId) {
    logger.info("Controller: getbookById", bookId);
    return await bookervice.getbookById(bookId);
  }

  async createbook(book) {
    logger.info("Controller: createbook", book);
    return await bookervice.createbook(book);
  }

  async updatebook(book) {
    logger.info("Controller: updatebook", book);
    return await bookervice.updatebook(book);
  }

  async deletebook(bookId) {
    logger.info("Controller: deletebook", bookId);
    return await bookervice.deletebook(bookId);
  }
}
module.exports = new TodoController();
