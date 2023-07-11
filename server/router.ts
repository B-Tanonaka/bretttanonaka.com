import { getTitles } from './controller';

const router = require('express').Router();

router.get('/', getTitles);

export default router;
