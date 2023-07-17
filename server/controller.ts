import { RequestHandler } from 'express';
import { getAllTitles, getProjectDetails, saveContact } from './model';

export const getTitles: RequestHandler = (req, res) => {
  getAllTitles()
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(502).send(err); });
};

export const getSingleProject: RequestHandler = (req, res) => {
  getProjectDetails(req.params.id)
    .then((data) => { res.status(200).send(data); })
    .catch((err: unknown) => { res.status(502).send(err); });
};

export const writeContact: RequestHandler = (req, res) => {
  saveContact(req.query)
    .then(() => { res.status(201).send('Contact created'); })
    .catch((err: unknown) => { res.status(422).send(err); });
};
