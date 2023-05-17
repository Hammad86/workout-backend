const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');
// Get all workout
const getAllWorkouts = async(req,res)=>{
    try {
        const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
    } catch (error) {
        console.log(error.meassage);
    }
    
}

// Get one workout
const getOneWorkout = async(req,res)=>{
    const {id} =  req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout!'})
        }
        const workout = await Workout.findById(id);
        if(!workout){
            return res.status(404).json({error:'No such workout!'})
        }
        res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
    }
   
}

// post one workout
const postWorkout = async(req,res)=>{
    const {name,description,type,duration,date} = req.body;
    try {
        const workout = await Workout.create({
            name,description,type,duration,date
        })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    res.json({msg:`post one workout`})

}


// delete one workout
const deleteWorkout = async(req,res) =>{
    const {id} =  req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout!'})
        }
        const workout = await Workout.findByIdAndDelete({_id:id})
        if(!workout){
            return res.status(400).json({error:'No such workout!'})
        }
        res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
    }
}

// update one worlout
const updateWorkout = async(req,res) =>{
    const {id} =  req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({error:'No such workout!'})
        }
        const workout = await Workout.findOneAndUpdate({_id:id},{
            ...req.body
        })
        if(!workout){
            return res.status(400).json({error:'No such workout!'})
        }
        res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    postWorkout,
    getAllWorkouts,
    getOneWorkout,
    deleteWorkout,
    updateWorkout
}