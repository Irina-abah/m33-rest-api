const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, "Sorry, wrong format of the email"]
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    select: false,
  },
});

module.exports = mongoose.model('user', userSchema);