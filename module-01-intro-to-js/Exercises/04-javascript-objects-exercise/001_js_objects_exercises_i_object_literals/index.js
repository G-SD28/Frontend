const book = {
  title: 'Dune',
  author: 'Frank Herbert',
  pages: 412,
  isRead: true,

  summary() {
    const readStatus = this.isRead ? 'Yes' : 'No';
    return `Title ${this.title}, Author ${this.author}, Pages: ${this.pages}, Read: ${readStatus}`;
  },
  toggleReadStatus() {
    // this.isRead = this.isRead ? false : true;
    this.isRead = !this.isRead;
  },
};

console.log(book.summary());

book.toggleReadStatus();

console.log(book.summary());

book.getAuthorInfo = function () {
  return `${this.author} has written a book with ${this.pages} pages.`;
};

console.log(book.getAuthorInfo());
