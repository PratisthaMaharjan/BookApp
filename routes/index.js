
var express = require('express');
var router = express.Router();

// new instance
const Book = require('../models/book');

/* GET home page. */
router.get('/', async function(req, res, next) {  // next decides what to run after the function finish its task?
  // const books = [
  //   {
  //     _id: '1',
  //     name: 'Book 1',
  //     description: 'new book 1',
  //     author: 'Author 1'
  //   },
  //   {
  //     _id: '2',
  //     name: 'Book 2',
  //     description: 'new book 2',
  //     author: 'Author 2'
  //   },
  //   {
  //     _id: '3',
  //     name: 'Book 3',
  //     description: 'new book 3',
  //     author: 'Author 3'
  //   }
  // ]
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

// make delete route and update
// router.delete("/remove/:id"), async function (){ try { const books = req.params.id;}}


// database storing stuff is asyncronous so async is used. (this function is asyncronous)
router.post('/save', async function(req, res) {
  try {
    console.log(req.body);
    const newBook = new Book(req.body);
    await newBook.save();
    console.log('book saved:', newBook);
  }
  catch (error) {
    console.log(error);
  }
  res.redirect('/');
});

module.exports = router;
