import {
  EngineerModel, VideoModel, AboutModel, FormModel,
} from './database';
import { Form } from '../interfaces';

export const getAllTitles = (category: string) => {
  if (category === 'engineer') {
    return EngineerModel.find({});
  }
  if (category === 'video') {
    return VideoModel.find({});
  }
  return AboutModel.find({});
};

export const getAbout = () => (AboutModel.find({}));

export const getProjectDetails = (category: string, id: string) => {
  if (category === 'engineer') {
    return EngineerModel.findOne({ ref: `${id}` });
  }
  return VideoModel.findOne({ ref: `${id}` });
};

export const saveContact = (data: Form) => (FormModel.create(data));
