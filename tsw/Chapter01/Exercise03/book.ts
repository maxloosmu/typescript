// Command Line Commands
// tsc book.ts 
// node book.js

// We will have properties for the author and the title of the book, 
// and optional properties for the number of pages of the book, 
// and a boolean that denotes whether we have read the book.

interface Book {
    author: string;
    title: string;
    pages?: number;
    isRead?: boolean;
}

// Displays the book's author and title to the console. 
// It also displays whether the book is read or not, if the `isRead` property is present.
function showBook(book: Book) {
    console.log(`${book.author} wrote ${book.title}`);
    if (book.isRead !== undefined && book.pages == undefined) {
        console.log(`  I have ${book.isRead ? "read" : "not read"} this book`);
    }
    else if (book.isRead == true && book.pages>0) {
        console.log(`  I have ${book.isRead ? "read" : "not read"} all ${book.pages} pages of this book`);
    }
}

// Take a book and a number of pages as parameters, and set the `pages` property of the book to the provided value.
function setPages (book: Book, pages: number) {
    book.pages = pages;
}

function showPages (book: Book) {
    console.log(book.pages);
}

// Takes a book and mark it as having been read
function readBook(book: Book) {
    book.isRead = true;
}

// Several objects that fulfill the interface's requirements
const warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and Peace",
    isRead: false
};

let mobyDick = {
    author: "Herman Melville",
    title: "Moby Dick"
};

// calling methods on the books
setPages(warAndPeace, 1225);
showBook(warAndPeace);

showBook(mobyDick)
setPages(mobyDick, 321)
showBook(mobyDick)
showPages(mobyDick)
readBook(mobyDick)
showBook(mobyDick)