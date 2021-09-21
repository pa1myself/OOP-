const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author}
       in ${this.year}`;   
},

getAge : function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years Old`;
}
};

//create Object

const book1 = Object.create(bookProtos);
book1.title = 'Book One';
book1.author = 'john doe';
book1.year = '2020';

console.log(book1);