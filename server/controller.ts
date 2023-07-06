const { getAllTitles, getProjectDetails } = require('./model');

module.exports = {
  getTitles: (req, res) => {
    getAllTitles()
      .then((data) => { res.status(200).send(data[0]); })
      .catch((err) => { res.status(500).send(err); });
  },
  getSingleProject: (req, res) => {
    getProjectDetails(req.params)
      .then((data) => { res.status(200).send(data); })
      .catch((err) => { res.status(500).send(err); });
  },
};
