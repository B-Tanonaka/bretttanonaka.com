import { RequestHandler } from 'express';
import {
  getAllTitles, getProjectDetails, getAbout, saveContact,
} from './model';

export const getTitles: RequestHandler = async (req, res) => {
  try {
    const response = await getAllTitles(req.params.category);
    res.status(200).send(response);
  } catch (err: unknown) {
    res.status(502).send(err);
  }
};

export const getSingleProject: RequestHandler = async (req, res) => {
  try {
    const response = await getProjectDetails(req.params.category, req.params.id);
    res.status(200).send(response);
  } catch (err: unknown) {
    res.status(502).send(err);
  }
};

export const getAllAbout: RequestHandler = async (req, res) => {
  try {
    const response = await getAbout();
    res.status(200).send(response[0]);
  } catch (err: unknown) {
    res.status(502).send(err);
  }
};

export const writeContact: RequestHandler = async (req, res) => {
  try {
    await saveContact(req.body);
    res.status(201).send('Contact created');
  } catch (err: unknown) {
    res.status(422).send(err);
  }
};
