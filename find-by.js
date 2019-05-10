const Person = require('./models/PersonModel');

function findBy(theValue, done){
    Person.find({occupation: theValue}, (err, result) => {
        if(err) console.error(err);
        done(result);
    });
}

module.exports = findBy;
