const User = require('./07_userModel');


function addUser(){
    console.log('adding User');

    const joe = new User({name: 'Doe'});
    joe.save()
    .then(() => console.log('saved User'))
    .catch((err) => console.log('Err', err));
};

module.exports = addUser;