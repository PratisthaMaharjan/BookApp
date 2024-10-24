const Book = require('../models/book');
var express = require('express');

var router = express.Router();

router.get("/:id", async function (req, res) { 
    try { 
        const books = req.params.id;
        await Book.deleteOne({_id: books});
        res.redirect('/');
        // res.end(JSON.stringify(Book));
        // console.log(Book);
    }
    catch (err) {
        res.end(err);
    }
});

module.exports = router;