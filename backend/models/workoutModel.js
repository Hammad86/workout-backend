const mongoose = require('mongoose');

const schema = mongoose.Schema;

const workoutScheme = new schema({
   name: {
    type: String,
    require:true
   },
   description:{
    type: String,
    require:true
   },
   type:{
    type:String,
    require:true
   },
   duration:{
    type:String,
    require:true
   },
   date:{
    type:String,
    require:true
   }
},{timestamps:true});

module.exports = mongoose.model('Workout',workoutScheme);