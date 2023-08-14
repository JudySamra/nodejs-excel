const mongoose = require ('mongoose');

const usreSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    ratings: Number
});
module.exports = mongoose.model('User' , usreSchema , 'books');