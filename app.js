const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

app.get('/c', (req, res) => {
  res.send('😁C 경로😁');
});

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);
