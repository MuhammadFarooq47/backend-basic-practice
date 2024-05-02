const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name should be required']
    }
});

const User = mongoose.model('user', UserSchema);

