import { EngineerModel, FormModel } from './database';
import { Form } from '../interfaces';

export const getAllTitles = () => (EngineerModel.find({}));
export const getProjectDetails = (id: string) => (EngineerModel.findOne({ ref: `${id}` }));
export const saveContact = (data: Form) => (FormModel.create(data));
