const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
  // add docker images
  host: 'redis-server',
  // default redis-server
  port: 6379
});
client.set('visits', 0);

app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(5001, () => {
  console.log('server start on port 5001');
});

