const mongoose = require("mongoose");

const userContactSchema = new mongoose.Schema({
    userName :{
        type: String,
        required:true
    },

    Email : {
        type: String,
        required:true,
        unique:true
    },
    message : {
        type:String,
        required:true,

    }

})

// Collection

const Contact = new mongoose.model("Contact" , userContactSchema);
module.exports = Contact;