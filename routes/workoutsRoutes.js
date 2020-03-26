const router = require('express').Router()
const { Item, User } = require('../models')
const passport = require('passport')
// GET all workouts
// router.get('/workouts', (req, res) => Item.find()
//   .then(workouts => res.json(workouts))
//   .catch(e => console.error(e)))

// POST one item
router.post('/workouts', passport.authenticate('jwt'), (req, res) => {
  console.log(req.user)
  Item.create({
    text: req.body.text,
    isDone: req.body.isDone,
    owner: req.user._id
  })
    .then(({ _id }) => {
      User.findByIdAndUpdate(req.user._id, { $push: { workouts: _id } })
        .then(() => res.sendStatus(200))
    })
    .catch(e => console.error(e))
})

// PUT one item
router.put('/workouts/:id', (req, res) => Item.findByIdAndUpdate(req.params.id, req.body)
  .then(() => res.sendStatus(200))
  .catch(e => console.error(e)))

// DELETE one item
router.delete('/workouts/:id', (req, res) => Item.findByIdAndDelete(req.params.id)
  .then(({ _id, owner }) => {
    User.findByIdAndUpdate(owner, { $pull: { workouts: _id } })
      .then(() => res.sendStatus(200))
  })
  .catch(e => console.error(e)))

module.exports = router
