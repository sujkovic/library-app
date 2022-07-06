let bookDiv, bookNameDiv, bookAuthorDiv, bookPagesDiv, bookReadDiv;
let libraryWrapper = document.querySelector('.library-wrapper');
let bookObj;
let bookIndex = 0;
let myLibrary = [];

class Book {
    constructor(title, author, pages, read, index) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
        bookDiv = document.createElement('div');
        bookNameDiv = document.createElement('div');
        bookAuthorDiv = document.createElement('div');
        bookPagesDiv = document.createElement('div');
        let bookReadButton = document.createElement('button');
        bookReadButton.classList.add('readbtn');
        let removeButton = document.createElement('button');
        bookNameDiv.textContent = title;
        bookAuthorDiv.textContent = author;
        bookPagesDiv.textContent = pages;
        bookReadButton.textContent = read;
        bookReadButton.addEventListener('click', () => {
            if (this.read === 'read') {
                bookReadButton.textContent = 'not read';
                this.read = 'not read';
            }
            else if (this.read === 'not read') {
                bookReadButton.textContent = 'read';
                this.read = 'read';
            }
        });
        removeButton.classList.add('remove-button');
        removeButton.classList.add(`${bookIndex}`);
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            myLibrary.splice(this.bookIndex, 1);
            removeButton.parentElement.remove();
        });
        bookDiv.appendChild(bookNameDiv);
        bookDiv.appendChild(bookAuthorDiv);
        bookDiv.appendChild(bookPagesDiv);
        bookDiv.appendChild(bookReadButton);
        bookDiv.appendChild(removeButton);
        bookDiv.classList.add('book');
        this.div = bookDiv;
        libraryWrapper.appendChild(bookDiv);
        removeButtons = document.querySelectorAll('.remove-button');
        bookIndex++;
    }
}

let newBookButton = document.querySelector('.btn');
newBookButton.addEventListener('click', () => {
    myLibrary.push(new Book(prompt('Please enter book name'), prompt('Enter Author'), prompt('Enter number of pages'), prompt('Type \'Read\' if you\'ve read this book or \'Not read\' if you haven\'t.')));
});
