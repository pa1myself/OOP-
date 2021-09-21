class Book{
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    
}

getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years Old`;
}

revise(newYear) {
    this.year = newYear;
    this.revised = true;
}

static topBookStore() {
    return 'burns & noble';
}

}

const book1 = new Book('Book One', 'John Doe', '2020');

// console.log(book1);
// book1.revise(2018);
// console.log(book1);

 console.log(Book.topBookStore());