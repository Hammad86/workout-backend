const {
postWorkout,
getAllWorkouts,
getOneWorkout,
deleteWorkout,
updateWorkout
} = require('../controllers/workoutController')
const express = require('express');
const routes = express.Router();

// Get all workout
routes.get('/',getAllWorkouts)

// Get one workout
routes.get('/:id',getOneWorkout)

// post one workout
routes.post('/',postWorkout)

// delete one workout
routes.delete('/:id',deleteWorkout)

// update one worlout
routes.patch ('/:id',updateWorkout)
module.exports = routes