const { model, Schema } = require('mongoose')

module.exports = model('workouts', new Schema({
  text: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true,
    default: false
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
}))
