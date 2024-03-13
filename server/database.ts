import mongoose from 'mongoose';
import {
  EngineerProject, VideoProject, AboutData, Form,
} from '../interfaces';

mongoose.connect('mongodb://localhost/portfolio');

// Prevents mongoose from adding s to end of collection name and pointing to wrong collection
mongoose.pluralize(null);

const engineerSchema = new mongoose.Schema<EngineerProject>({
  name: String,
  year: Number,
  role: [],
  description: String,
  techStack: [],
  ref: String,
  repo: String,
  banner: String,
  images: Object,
  order: Number,
  link: String,
});

const videoSchema = new mongoose.Schema<VideoProject>({
  name: String,
  company: String,
  year: String,
  role: [],
  description: Object,
  techStack: [],
  ref: String,
  banner: String,
  images: Object,
  videos: Object,
  order: Number,
});

const aboutSchema = new mongoose.Schema<AboutData>({
  engineer: Object,
  video: Object,
});

const formSchema = new mongoose.Schema<Form>({
  name: String,
  email: String,
  message: String,
});

export const EngineerModel = mongoose.model('engineer', engineerSchema);
export const VideoModel = mongoose.model('video-production', videoSchema);
export const AboutModel = mongoose.model('about', aboutSchema);
export const FormModel = mongoose.model('contact', formSchema);
