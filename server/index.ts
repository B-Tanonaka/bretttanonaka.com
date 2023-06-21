require('dotenv').config();
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();