const db = require('./database');

module.exports = {
  getAll: () => (db.find({})),
  getProjectDetails: () => (db.find({})),
};
