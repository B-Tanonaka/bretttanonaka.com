import { RequestHandler } from 'express';
import { getAllTitles, getProjectDetails } from './model';
// import type { Project } from '../interfaces';

export const getTitles: RequestHandler = (req, res) => {
  getAllTitles()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(500).send(err); });
};

export const getSingleProject: RequestHandler = (req, res) => {
  getProjectDetails()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(500).send(err); });
};
