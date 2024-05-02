const User = require('./07_userModel');

//Find all users with the name of joe is waly function k zariya hamary database me jtny bhe joe
//name k log hngy un sb ko utha kr ly ayga or display krdyga...

User.find({name: 'joe'})
.then((users) => {
    console.log('Users', users);
}).catch((err) => console.log('Error', err));


//finds user with with a name of joe us waly function k zariya database me jo first
//wala joe hoga usy utha kr ly ayga...
User.findOne({name: 'joe'})  //or you can use {_id: "whatever"}
.then((user) => {
    console.log('User', user);
})
.catch((err) => console.log('Error', err));