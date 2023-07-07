const db = require('./database');

module.exports = {
  getAllTitles: () => (db.find({})),
  getProjectDetails: () => (db.find({})),
};
