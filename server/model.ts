import db from './database';

export const getAllTitles = () => (db.find({}));
export const getProjectDetails = (id: string) => (db.findOne({ ref: `${id}` }));
export const saveContact = () =>
