const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/portfolio');

const projectSchema = mongoose.Schema({
  name: String,
  year: Number,
  role: [],
  description: String,
  techStack: [],
  ref: String,
});

module.exports = mongoose.model('projects', projectSchema);
