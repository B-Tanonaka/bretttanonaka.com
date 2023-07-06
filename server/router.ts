const { getAll } = require('./controller');

module.exports = {
  get: (req, res) => {
    getAll()
      .then((data) => { res.status(200).send(data[0]); })
      .catch((err) => { res.status(404).send(err); });
  },
};
