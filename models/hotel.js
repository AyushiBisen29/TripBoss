const mongoose = require("mongoose");

const userHotelSchema = new mongoose.Schema({
    checkInData : {
       type:Date,
        
    },
    checkOutData:
         {
        type:Date,
       
    },
    adults : {
        type:Number,
        

    },
    children : {
        type:Number,
      

    },
    room : {
        type:Number,
       


    }

})

// Collection

const Hotel = new mongoose.model("Hotel" , userHotelSchema);
module.exports = Hotel;