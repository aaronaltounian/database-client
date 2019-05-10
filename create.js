let Person = require('./models/PersonModel');

function create( theThing, done ){
    let person = new Person( theThing );
    person.save( (err, result) => {
        done();
    });
}

module.exports = create;
