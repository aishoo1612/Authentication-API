const express = require("express");
const app = express ();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


//connect to DB
mongoose.connect(
    process.env.DB_CONNECT,{ useNewUrlParser: true} ,() => 
    console.log('connected to db')
    );

    
//Import Routes 
const authRoute = require('./auth');

//Route Middlewares
app.use('/api/user' , authRoute);



app.listen(1337, ()=> console.log('server up nd running!'));
