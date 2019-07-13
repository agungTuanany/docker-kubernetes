const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hi there');
});

app.listen(5001, () => {
  console.log(`app run on port 5001`);
});
