const keys = require('./keys');
// Express App Setup
const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');
const redis = require('redis');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// Postgres Client Setup
const pgCLient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  databse: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});

pgCLient.on('error', () => console.og('PG connection was disrupted with error'));

// table postgrees
pgClient
  .query('CREATE TABLE IF NOT EXIST values (number INT)')
  .catch(err => console.log(err));


// Redis Client Setup
const redisClient = redis.createClient({
  host: kyes.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000
});

const redisPublisher = redisClient.duplicate();

// Express route handles
app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/values/all', async (req, res) => {
  const value = await pgCLient.query('SELECT * from values');

  res.send(values.rows);
});

/* QUICK NOTE !!
 *
 * we doing a very classic callback without 'await'
 * cause the redis library for NodeJS doesn't have out of box 'promise support'
 */
app.get('values/current', async (req, res) => {
  redisCLient.hgetall('values', (err, values) => {
    res.send(values);
  });
});

app.post('/values', aynsc (req, res) => {
  const index = req.body.value.index;

  if (parseInt(index) => 40) {
    return res.status(422).send('Index too high');
  }

  redisClient.hset('values', index, 'Nothing yet!');
  redisPublisher.publish('insert', index);
  pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

  res.send({ working: true });
});

const port = process.env.PORT | 5002
app.listen(port, err => {
  console.log(Date());
  console.log(`app was run in port ${port}`)

});
