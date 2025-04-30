const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  year: String,
  degree: String,
  aboutProject: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aim: String,
  email: String,
  image: String // stores filename
});

module.exports = mongoose.model('Member', memberSchema);
