import { RequestHandler } from 'express';
import type { Project } from '../interfaces';

const { getAllTitles, getProjectDetails } = require('./model');

export const getTitles: RequestHandler = (req, res) => {
  res.send('get request successful');
  // getAllTitles()
  //   .then((data: Project) => { res.status(200).send('get request successful'); })
  //   .catch((err: unknown) => { res.status(500).send(err); });
};

export const getSingleProject: RequestHandler = (req, res) => {
  getProjectDetails(req.params)
    .then((data: Project) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(500).send(err); });
};
