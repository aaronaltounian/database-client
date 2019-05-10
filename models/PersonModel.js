let mongoose = require('mongoose');

let personSchema = new mongoose.Schema({
    name: String,
    age: String,
    occupation: String,
});

let Person = mongoose.model( 'Person', personSchema );

module.exports = Person;
