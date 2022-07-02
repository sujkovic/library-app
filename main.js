let bookDiv, bookNameDiv, bookAuthorDiv, bookPagesDiv, bookReadDiv;
let libraryWrapper = document.querySelector('.library-wrapper');
let bookObj;
let bookIndex = 0;
let myLibrary = [];

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary(title, author, pages, read) {
    bookObj = new Book(title, author, pages, read, bookIndex);
    myLibrary.push(bookObj);
    bookDiv = document.createElement('div');
    bookNameDiv = document.createElement('div');
    bookAuthorDiv = document.createElement('div');
    bookPagesDiv = document.createElement('div');
    bookReadDiv = document.createElement('div');
    let removeButton = document.createElement('button');
    bookNameDiv.textContent = title;
    bookAuthorDiv.textContent = author;
    bookPagesDiv.textContent = pages;
    bookReadDiv.textContent = read;
    removeButton.classList.add('remove-button');
    removeButton.classList.add(`${bookIndex}`);
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        myLibrary = myLibrary.splice(this.bookIndex, 1);
        removeButton.parentElement.remove();
    });
    bookDiv.appendChild(bookNameDiv);
    bookDiv.appendChild(bookAuthorDiv);
    bookDiv.appendChild(bookPagesDiv);
    bookDiv.appendChild(bookReadDiv);
    bookDiv.appendChild(removeButton);
    bookDiv.classList.add('book');
    libraryWrapper.appendChild(bookDiv);
    removeButtons = document.querySelectorAll('.remove-button');
    bookIndex++;
}

let newBookButton = document.querySelector('.btn');
newBookButton.addEventListener('click', () => {
    addBookToLibrary(prompt('Please enter book name'), prompt('Enter Author'), prompt('Enter number of pages'), prompt('Type \'Read\' if you\'ve read this book or \'Not read\' if you haven\'t.'));
});
