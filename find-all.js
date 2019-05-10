const Person = require('./models/PersonModel');

function findAll(done){
    Person.find({}, (err, people) => {
        if(err) return console.error(err);
        done(people);
    })
}

module.exports = findAll;
