import { getTitles, getSingleProject } from './controller';

const router = require('express').Router();

router.get('/project-data', getTitles);
router.get('/project-data/:id', getSingleProject);

export default router;
