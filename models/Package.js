
const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    Destination :{
        type: String,
        required:true
    },

    Date: {
        type: Date,
        required:true,
        
    },
    Price: {
        type: String,
        required:true
    }
    
})

// Collection

const Package = new mongoose.model("Package" , employeeSchema);
module.exports = Package;