//test comment

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

const setEditModal = (isbn) => {
    // Get information about the book using isbn
    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", `http://localhost:3000/book/${isbn}`, false);
    xhttp.send();

    const book = JSON.parse(xhttp.responseText);

    const {
        title,
        author,
        publisher,
        publish_date,
        numOfPages
    } = book;

    // Filling information about the book in the form inside the modal
    document.getElementById('isbn').value = isbn;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    document.getElementById('publisher').value = publisher;
    document.getElementById('publish_date').value = publish_date;
    document.getElementById('numOfPages').value = numOfPages;

    // Setting up the action url for the book
    document.getElementById('editForm').action = `http://localhost:3000/book/${isbn}`;
}


// Where we will keep books
let books = [
    {
        "isbn": "9780679752554",
        "title": "Discipline & Punish: The Birth of the Prison",
        "author": "Michel Foucault",
        "publish_date": "1975",
        "publisher": "Vintage Books",
        "numOfPages": 333
    },
    {
        "isbn": "9780679721109",
        "title": "Madness and Civilization: A History of Insanity in the Age of Reason",
        "author": "Michel Foucault",
        "publish_date": "1961",
        "publisher": "Vintage Books",
        "numOfPages": 320
    },
    {
        "isbn": "9780679753346 ",
        "title": "The Birth of the Clinic: An Archaeology of Medical Perception",
        "author": "Michel Foucault",
        "publish_date": "1963",
        "publisher": "Vintage Books",
        "numOfPages": 240
    },
    {
        "isbn": "9780679724698 ",
        "title": "The History of Sexuality, Vol. 1: An Introduction",
        "author": "Michel Foucault",
        "publish_date": "1976",
        "publisher": "Vintage Books",
        "numOfPages": 240
    },
    {
        "isbn": "9780679724698 ",
        "title": "The History of Sexuality, Vol. 2: The Use of Pleasure",
        "author": "Michel Foucault",
        "publish_date": "1976",
        "publisher": "Vintage Books",
        "numOfPages": 304
    },
    {
        "isbn": "9780394741550",
        "title": "The History of Sexuality, Vol. 3: The Care of the Self",
        "author": "Michel Foucault",
        "publish_date": "1976",
        "publisher": "Vintage Books",
        "numOfPages": 288
    },
    {
        "isbn": "9781524748036",
        "title": "The History of Sexuality, Volume 4: Confessions of the Flesh",
        "author": "Michel Foucault",
        "publish_date": "2021",
        "publisher": "Pantheon",
        "numOfPages": 416
    },  
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});
app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;

    // Searching books for the isbn
    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }

    // Sending 404 when not found something is a good practice
    res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
    // reading isbn from the URL
    const isbn = req.params.isbn;
console.log(isbn)
    // remove item from the books array
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }

        return false;
    });

    // sending 404 when not found something is a good practice
    res.send('Book is deleted');
});

app.post('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    const isbn = req.params.isbn;
    const newBook = req.body;

    // Remove item from the books array
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

