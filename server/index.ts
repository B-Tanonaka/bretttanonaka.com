import morgan from 'morgan';
import express from 'express';
import path from 'path';
import cors from 'cors';
import router from './router';

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3131;

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

app.listen(PORT, () => { console.log(`Server listenting on port ${PORT}`); });
