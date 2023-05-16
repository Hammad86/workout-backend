require('dotenv').config();
const workoutRouts = require('./routes/workouts')
const mongoose = require('mongoose');
const express = require('express');

// express app
const app = express();

// port
const port = process.env.PORT

// middleware
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.path}`)
    next();
})

// Routes
app.use('/api/workout',workoutRouts)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(port,()=>{
        console.log(`App is running on 4000`);
    });
})
.catch((error)=>{
    console.log(error);
})



