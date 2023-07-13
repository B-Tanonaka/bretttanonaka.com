import { getTitles } from './controller';

const router = require('express').Router();

router.get('/projects', getTitles);

export default router;
