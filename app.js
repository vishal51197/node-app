import express from 'express';
import { engine } from 'express-handlebars';
const app = express();
import route from './routes/routes.js';
import bodyParser from 'body-parser';

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use("/assets", express.static('./assets'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use("/", route);

app.listen(3000, async function () {
  console.log('Example app listening on port 3000!');
});