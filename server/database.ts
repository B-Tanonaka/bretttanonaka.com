import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/portfolio');

const projectSchema = new mongoose.Schema({
  name: String,
  year: Number,
  role: [],
  description: String,
  techStack: [],
  ref: String,
});

export default mongoose.model('projects', projectSchema);
