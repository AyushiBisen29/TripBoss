
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username :{
        type: String,
        required:true
    },

    email : {
        type: String,
        required:true,
        unique:true
    },
    password : {
        type: String,
        required:true
    },
    cpassword : {
        type: String,
        required:true
    }

})

// Collection

const Register = new mongoose.model("Register" , employeeSchema);
module.exports = Register;