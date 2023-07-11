import mongoose from 'mongoose';
import { Project } from '../interfaces';

mongoose.connect('mongodb://localhost/portfolio');

const projectSchema = new mongoose.Schema<Project>({
  name: String,
  year: Number,
  role: [],
  description: String,
  techStack: [],
  ref: String,
});

const ProjectData = mongoose.model<Project>('projects', projectSchema);

export default ProjectData;
