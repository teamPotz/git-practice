const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});
app.get('/b', (req, res) => {
  res.send('B기능');
});
app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);
