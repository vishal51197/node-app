import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
import AWS from 'aws-sdk';
import route from './routes/routes.js';
import config from './config/config.js';
import bodyParser from 'body-parser';
import path from 'path';

AWS.config.credentials = new AWS.Credentials(
  config.AWS.accessKeyId, // Your access key ID
  config.AWS.secretAccessKey, // Your secret access key
);
AWS.config.region = config.AWS.region;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use("/assets", express.static('./assets'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/", route);

const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://localhost:27017')

// Connect to database
client.connect()
.then(() => console.log('Connected Successfully'))
.catch(error => console.log('Failed to connect', error))

app.listen(3000, async function () {
  console.log('Example app listening on port 3000!');
});