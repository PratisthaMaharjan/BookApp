const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// new mongoose.Schema can be done too (merge line 3 and 5)
const bookSchema = new Schema({  
    _id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    }
});


// Create Book model
const Book = mongoose.model('book', bookSchema);

module.exports = Book;