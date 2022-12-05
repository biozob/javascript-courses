class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }

    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function loadBooks(bookArg) {
    fakeAjax(BOOK_API, function (books) {
        for (let book of books) {
            bookArg.addFavoriteBook(book);
            // console.log(book);
        }
        bookArg.printFavoriteBooks();
    });
}

var BOOK_API = "https://some.url/api";
var bookShelfInstance = new Bookshelf();
loadBooks(bookShelfInstance);

// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url, cb) {
    setTimeout(function fakeLoadingDelay() {
        cb([
            "A Song of Ice and Fire",
            "The Great Gatsby",
            "Crime & Punishment",
            "Great Expectations",
            "You Don't Know JS"
        ]);
    }, 500);
}
