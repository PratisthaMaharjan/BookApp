const express = require('express');
const Book = require('../models/book');
const router = express.Router();

router.get('/:_id', (req, res) => {
    try {
        const id = req.params._id;
        if (!id)    throw new Error('Error');
        // console.log({_id: id, ...req.query});
        res.render('edit', {_id: id, ...req.query});
        
    }
    catch (err) {
        res.end(err);
    }
});

router.post('/:_id', async (req, res) => {
    try {
        const id = req.params._id;
        if (!id)    throw new Error('Error');
        const response = await Book.updateOne({_id: id}, req.body);
        if (response.matchedCount) res.redirect('/');
        else    throw new Error("No update");
    }
    catch (err) {
        res.end("Error");
    }
})

module.exports = router;