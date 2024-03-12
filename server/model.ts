import { EngineerModel, VideoModel, FormModel } from './database';
import { Form } from '../interfaces';

export const getAllTitles = (category: string) => {
  if (category === 'engineer') {
    return EngineerModel.find({});
  }
  return VideoModel.find({});
};

export const getProjectDetails = (category: string, id: string) => {
  if (category === 'engineer') {
    return EngineerModel.findOne({ ref: `${id}` });
  }
  return VideoModel.findOne({ ref: `${id}` });
};

export const saveContact = (data: Form) => (FormModel.create(data));
