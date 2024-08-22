const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require("./db/conn");
const Register = require("./models/registers");
const Package = require("./models/Package");
const contact = require("./models/contact");
const hotel = require("./models/hotel");
const port = process.env.port || 3000;

const static_path = path.join(__dirname, "/public");
const template_path = path.join(__dirname, "/templates/views");
const partials_path = path.join(__dirname, "/templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);



app.get("/", (req, res) => {
    res.render("loginpage")
});

app.get("/register", (req, res) => {
    res.render("register")
});

app.get("/index", (req, res) => {
    res.render("index")
});


app.get("/blog", (req, res) => {
    res.render("blog")
});

app.get("/hotel", (req, res) => {
    res.render("hotel")
});

app.get("/galary", (req, res) => {
    res.render("galary")
});
app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

app.get("/package", (req, res) => {
    res.render("package")
});





app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.cpassword;

        if (password === cpassword) {
            const registeremployee = new Register({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                cpassword: req.body.cpassword
            })

            const registered = await registeremployee.save();
            res.status(201).render("loginpage");
        }
        else {
            res.send("passwords are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})


app.post("/contact", async (req, res) => {
    try {
        const userContact = new contact({
            userName: req.body.userName,
            Email: req.body.Email,
            message: req.body.message,
        })



        const contactsaved = await userContact.save();
        res.status(201).render("contact");



    } catch (error) {
        res.status(400).send(error);
    }
})

app.post("/hotel", async (req, res) => {
    try {
        const hotelInfo = new hotel({
            checkInData: req.body.checkInData,
            checkOutData: req.body.checkOutData,
            adults: req.body.adults,
            children: req.body.children,
            room: req.body.room

        })



        const infosaved = await hotelInfo.save();
        res.status(201).render("hotel");



    } catch (error) {
        res.status(400).send(error);
    }
})


app.post("/loginpage", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({ email: email });

        if (useremail.password === password) {
            res.status(201).render("index");
        }
        else {
            res.send("password are not matching");
        }
    } catch (error) {
        res.status(400).send("invalid login details")
    }
})



app.post("/index", async (req, res) => {
    try {
        const travelerdata = new Package({

            Destination: req.body.Destination,
            Date: req.body.Date,
            Price: req.body.Price,
        })
        const bookingdone = await travelerdata.save();
        res.status(201).render("package");

    } catch (error) {
        res.status(400).send(error);
    }
})





app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})



















const mongoose = require("mongoose");

const rentCustmerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true

    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode:{
       type:Number,
       required:true
    },
    nameoncard:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    month:{
        type:Date,
        required:true
    },
    year:{
        type:Date,
        required:true
    },
    cvv:{
        type:Number,
        required:true
    }
})
const Rent = new mongoose.model("Rent" , rentCustmerSchema);
module.exports = Rent;