const bookRepository = require("../repository/book.repository");

class bookervice {
  constructor() {}

  async getbook() {
    return await bookRepository.getbook();
  }

  async getbookById(bookId) {
    return await bookRepository.getbookById(bookId);
  }

  async createbook(book) {
    return await bookRepository.createbook(book);
  }

  async updatebook(book) {
    return await bookRepository.updatebook(book);
  }

  async deletebook(bookId) {
    return await bookRepository.deletebook(bookId);
  }
}

module.exports = new bookervice();
