let bookDiv, bookNameDiv, bookAuthorDiv, bookPagesDiv, bookReadDiv;
let libraryWrapper = document.querySelector('.library-wrapper');
let bookObj;
let bookIndex = 0;
let myLibrary = [];

let removeButtons = document.querySelectorAll('.remove-button');
let removeButton;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = bookIndex;
    bookIndex++;
}

function addBookToLibrary(title, author, pages, read) {
    bookObj = new Book(title, author, pages, read);
    myLibrary.push(bookObj);
}

function displayBook(book) {
    bookDiv = document.createElement('div');
    bookNameDiv = document.createElement('div');
    bookAuthorDiv = document.createElement('div');
    bookPagesDiv = document.createElement('div');
    bookReadDiv = document.createElement('div');
    removeButton = document.createElement('button');
    bookNameDiv.textContent = book.title;
    bookAuthorDiv.textContent = book.author;
    bookPagesDiv.textContent = book.pages;
    bookReadDiv.textContent = book.read;
    removeButton.classList.add('remove-button');
    removeButton.textContent = 'Remove';
    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(bookAuthorDiv);
    bookDiv.appendChild(bookPagesDiv);
    bookDiv.appendChild(bookReadDiv);
    bookDiv.appendChild(removeButton);
    /*
    removeButton.addEventListener('click', () => {
        myLibrary = myLibrary.splice(book.index, 1);
        removeButton.parentElement.remove();
        displayLibrary();
    });
    */
    bookDiv.classList.add('book');
    libraryWrapper.appendChild(bookDiv);
    removeButtons = document.querySelectorAll('.remove-button');
}

function displayLibrary() {
    while (libraryWrapper.firstChild) {
        libraryWrapper.firstChild.remove();
    }
    for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
    }
}

let newBookButton = document.querySelector('.btn');
newBookButton.addEventListener('click', () => {
    addBookToLibrary(prompt('Please enter book name'), prompt('Enter Author'), prompt('Enter number of pages'), prompt('Type \'Read\' if you\'ve read this book or \'Not read\' if you haven\'t.'));
    displayLibrary();
});

removeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('among');
        myLibrary = myLibrary.splice(this.index, 1);
        libraryWrapper[this.index].remove();
        displayLibrary();
    });
});
/*
document.querySelector('.remove-button').addEventListener('click', () => {
    alert('among');
    myLibrary = myLibrary.splice(this.index, 1);
    libraryWrapper[this.index].remove();
    displayLibrary();
});
*/