import morgan from 'morgan';
import express from 'express';
import path from 'path';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
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

// const privateKey = fs.readFileSync('path/to/your/private-key.pem', 'utf8');
// const certificate = fs.readFileSync('path/to/your/certificate.pem', 'utf8');
// const credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);

app.listen(PORT, () => { console.log(`Server listenting on port ${PORT}`); });

// httpsServer.listen(443, () => { console.log('Server running on port 443'); });
