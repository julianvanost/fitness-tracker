const router = require('express').Router()

router.use('/api', require('./workoutsRoutes.js/index.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router
