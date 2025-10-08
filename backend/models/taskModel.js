const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // assuming you have a User model
    required: true
  }
}, {
  timestamps: true // automatically adds createdAt and updatedAt
});

// virtual id field for easier JSON handling
taskSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

taskSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Task', taskSchema);
