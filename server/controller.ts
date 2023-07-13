import { RequestHandler } from 'express';
import { getAllTitles, getProjectDetails } from './model';

export const getTitles: RequestHandler = (req, res) => {
  getAllTitles()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(500).send(err); });
};

export const getSingleProject: RequestHandler = (req, res) => {
  getProjectDetails(req.params.id)
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(500).send(err); });
};
