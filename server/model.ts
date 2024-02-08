import { ProjectModel, FormModel } from './database';
import { Form } from '../interfaces';

export const getAllTitles = () => (ProjectModel.find({}));
export const getProjectDetails = (id: string) => (ProjectModel.findOne({ ref: `${id}` }));
export const saveContact = (data: Form) => (FormModel.create(data));
