const mongoose = require('mongoose')
const express = require('express')
const {join} = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(join(__dirname, 'public')))

//bring in routes
app.use(require('./routes'))
//html routes
//homepage, rendering index.html
app.get('/', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'index.html'))
})

//route for exercise.html
app.get('/exercise', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'exercise.html'))
})

//route for stats.html
app.get('/stats', (request, response) => {
  response.sendFile(join(__dirname, 'public', 'stats.html'))
})

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then( () => app.listen(process.env.PORT || 3000))
.catch( error => console.error(error))