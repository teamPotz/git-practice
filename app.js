const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('hello from simple server :)');
});

app.get('/b', (req, res) => {
  res.send('B기능');
});

app.get('/a', (req, res) => {
  res.send('a 경로 들어왔을때 로직');
});
        
app.get('/c', (req, res) => {
  res.send('😁C 경로😁');
});

app.get('/d', (req, res) => {
  res.send('DDDDDDDDDDDD');
})

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);
