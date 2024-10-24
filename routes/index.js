
var express = require('express');
var router = express.Router();

// new instance
const Book = require('../models/book');

/* GET home page. */
router.get('/', async function(req, res, next) {  // next decides what to run after the function finish its task?

  try {
    const books = await Book.find();
    res.render('index', {title: "Book List", bookList: books});
    // res.json(books);
  }
  catch (err) {
    console.log(err);
    return null;
  }
  // res.render('index', { title: 'World', bookList: books });
});

router.get('/add-book', function (req, res, next) {
  res.render('addBooks');
});


// database storing stuff is asyncronous so async is used. (this function is asyncronous)
router.post('/save', async function(req, res) {
  try {
    console.log(req.body);
    const newBook = new Book(req.body);
    await newBook.save();
    console.log('Book saved:', newBook);
  }
  catch (error) {
    console.log(error);
  }
  res.redirect('/');
});

module.exports = router;
