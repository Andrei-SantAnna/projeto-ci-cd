const soma = require('../src/index');

module.exports = (req, res) => {
  const { a, b } = req.query;
  const result = soma(Number(a), Number(b));
  res.status(200).json({ result });
};
