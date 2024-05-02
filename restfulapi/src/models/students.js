const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already exists."],
        // validate(value){
        //     if(validator.isEmail(value)){
        //         throw new Error("Invalid email")
        //     }
        // }
    },
    phone: {
        type: Number,
        min: 11,
        //max: 11,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
});

//Create new collection with the help of models...
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;