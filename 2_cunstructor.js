function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

this.getSummary= function() {
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    };
}

const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'John Smith', '2021');

console.log(book2.getSummary());