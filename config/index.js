
module.exports = require('mongoose').connect('mongodb://localhost/fitnessdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
