const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


// POstgres Client Setup
const { Pool } = require('pg');
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
