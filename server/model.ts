import db from './database';

export const getAllTitles = () => (db.find({}));
export const getProjectDetails = () => (db.find({}));
