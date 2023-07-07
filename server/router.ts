const route = require('express').Router();
const { getTitles } = require('./controller');

route.get('/', getTitles);

module.exports = route;
