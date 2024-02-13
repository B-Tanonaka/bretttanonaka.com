import express from 'express';
import { getTitles, getSingleProject, writeContact } from './controller';

const router = express.Router();

router.get('/project-data', getTitles);
router.get('/project-data/:id', getSingleProject);
router.post('/contact-data', writeContact);

export default router;
