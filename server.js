const http = require('http');
const express = require('express');
const app = express();

let todos = [
  'one',
  'two',
  'three',
  'four',
];

app.use('/semantic', express.static(`${__dirname}/semantic`));
app.use('/assets', express.static(`${__dirname}/assets`));
app.use('/', express.static(`${__dirname}/src`));

app.use('/save', (req, res) => {
  todos = req.query.data.split(',');
  const response = { saved: {} };
  todos.forEach(todo => response.saved[todo] = true);
  res.json(response);
});

app.use('/load', (req, res) => {
  res.json(todos);
});

const server   = http.createServer(app);
server.listen(3000, () => console.log('Node server running on http://localhost:3000'));

module.exports = app;
