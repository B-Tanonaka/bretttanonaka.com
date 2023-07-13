import mongoose from 'mongoose';
import { Project } from '../interfaces';

mongoose.connect('mongodb://localhost/portfolio');

// Prevents mongoose from adding s to end of collection name and pointing to wrong collection
mongoose.pluralize(null);

const projectSchema = new mongoose.Schema<Project>({
  name: String,
  year: Number,
  role: [],
  description: String,
  techStack: [],
  ref: String,
});

const ProjectModel = mongoose.model('portfolio', projectSchema);

export default ProjectModel;
