const mongoose = require("mongoose");
const validator = require("validator");

//creation a new database...
mongoose.connect("mongodb://localhost:27017/practicedata", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connect sucessfully..."))
.catch((err) => console.log(err))


// A mongoose Schema defines the structure of the document, default values, validators, etc.

// Mongoose Schema hamary documents k structure, default values, validations wagera ko apny hisab sy set krny k lea use hoti hn means humy database me kis chez ki kia type rakhni hy wo hum yahn khud sy Schema k zariya set kr skty hn example in below...

const emplyeeSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true
        //unique:true, //ismy ya hota hy k mera data unique hona chiya like designation Mern developer register hogaya tw ab another Mern developer register nhi hoga...

        //lowercase ya upercase: true //me jo bhe case use krnga mera name database me usi case sy save hoga like age=r me lowercase krdn mera name ka data lowercase sy save hoga.

        //trim:true //iska ya kam hota hy k agr user name likhny sy pahly or name likhny k bd space dydy tw trim ka method us space ko khtm krdyta hy...

        //minlenght: 2, //isy hum ya mention krty hn k hamara name hy usmy atleast 2 words tw hony chiya..

        //enum:["frontend", "backend", "database"] //isy humy designation me use krna hoga isy ya hota hy k jo name hym ny enum me likhdia ab disignation me sirf wohe name user put kr skta hy agr koi or name likhyga tw error ajayga...
    },
    designation: String,
    email: {
        type: String,
        validate(value){
         if(!validator.isEmail(value)){
             throw new Error("Email is invalid...")
         }   
        }
    }, 
    age: {
        type: Number,
        validate(value){
            if(value < 21){
                throw new Error("Age can't be less than 21")
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now  
    }
});

// Models hamra CRUD operations perform krny k liya use hota hy like humy database k lea documents ka collection create krna ho ya Read, Update ya delete tw ya kam hum model k zariya sy krty hn...


// Collection creation: isy database me collection bnta hy abhe employeedatas ka collection bnyga..
const Employeedata = new mongoose.model("Employeedata", emplyeeSchema);

// Create document and insert data in document..

const createDocument = async () => {
try{
    const printDesigner = new Employeedata({
        name: "Hamza",
        designation: "Printing Designer",
        age: 23,
        active: true
    });
    const developerRecord = new Employeedata({
        name: "Farooq",
        designation: "Mern developer",
        email: "m.abc@g",
        age: 24,
        active: true
    });
    const designerRecord = new Employeedata({
        name: "Danish",
        designation: "Senior Graphic designer",
        age: 21,
        active: true
    });

    const frontEnd = new Employeedata({
        name: "Osama",
        designation: "Front End Developer",
        email: "osama@gmail.com",
        age: 20,
        active: true
    })
    
    // const result = await Employeedata.insertMany([printDesigner, developerRecord, designerRecord]);
    const result = await Employeedata.insertMany([frontEnd])
    console.log("Result ==>>",result)
}catch(err){
    console.log(err.message)
}
}

createDocument()

// This function is use for read documents...
const readData = async () => {
    try{
        const result = await Employeedata
        // .find({name: "Farooq"}, {designation:1});
        .find({$and:[ {age: {$gte: 23}}, {active: true}]}) //Comparission query operator
        //.countDocuments()
        .sort({name: 1}) // Agr positive 1 likhngy tw assending order me show hoga or agr negative -1 me likhngy tw dessending order me show hoga...!
        console.log(result)
    }catch(err){
        console.log("Error",err)
    }
    
}

//readData()

// This function is use for update documents...

const updateDocument = async (_id) => {
    try{
        const result = await Employeedata
        .updateOne({_id}, {
            $set: {
                name: "Osama"
            }
        } );

        console.log("Update Data Result ==>>",result)
    }catch(err){
        console.log(err)
    }
    
}

//updateDocument('6037d7e820c79305cc8588f3');

// This function is use for delete documents...

const deleteDocument = async (_id) => {
    try{
        const result = await Employeedata.findByIdAndDelete({_id});
        console.log( "Dalete document" ,result)
    }catch(err){
        console.log(err)
    }
};

//deleteDocument("60353db3ed63c44320465372")