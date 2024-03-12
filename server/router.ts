import express from 'express';
import { getTitles, getSingleProject, writeContact } from './controller';

const router = express.Router();

router.get('/:category/project-data', getTitles);
router.get('/:category/project-data/:id', getSingleProject);
router.post('/contact-data', writeContact);

export default router;
