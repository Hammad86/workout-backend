const express = require('express');
const routes = express.Router();

// Get all workout
routes.get('/',(req,res)=>{
    res.json({msg:`Get all workouts`})
})

// Get one workout
routes.get('/:id',(req,res)=>{
    res.json({msg:`Get one workout`})
})

// post one workout
routes.post('/',(req,res)=>{
    res.json({msg:`post one workout`})
})

// delete one workout
routes.delete('/:id',(req,res)=>{
    res.json({msg:`delete one workout`})
})

// update one worlout
routes.patch ('/:id',(req,res)=>{
    res.json({msg:`update one workout`})
})
module.exports = routes