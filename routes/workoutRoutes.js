const router = require('express').Router()
const Workout = require('../models')

//getting all workouts
router.get('/workouts', (request, response) => {
  Workout.find()
  .then( workouts => response.json(workouts))
  .catch( error => console.error(error))
})

//create a workout
router.post('/workouts', (request, response) => {
  Workout.create(request.body)
  .then( () => response.sendStatus(200))
  .catch( error => console.error(error))
})

//update a workout
router.put('/workouts/:id', (request, response) => {
  Workout.findOneAndUpdate({_id: request.params.id}, request.body)
  .then( () => response.sendStatus(200))
  .catch(error => response.sendStatus(400))
})

//delete a workout
router.delete('/workouts/:id', (request, response) => {
  Workout.deleteOne({_id: request.params.id})
  .then( () => response.sendStatus(200))
  .catch(error => response.sendStatus(400))
})

module.exports = router