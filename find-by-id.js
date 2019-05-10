const Person = require('./models/PersonModel');

function findById(id, done){
    Person.find({_id: id}, (err, people) => {
        if(err) console.error(err);
        else done(people);
    });
}

module.exports = findById;
