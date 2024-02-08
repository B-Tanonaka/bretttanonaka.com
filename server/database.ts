import mongoose from 'mongoose';
import { Project, Form } from '../interfaces';

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

const formSchema = new mongoose.Schema<Form>({
  name: String,
  email: String,
  message: String,
});

export const ProjectModel = mongoose.model('portfolio', projectSchema);
export const FormModel = mongoose.model('contact', formSchema);
