const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const itemRoute = require('./routes/route');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/items', itemRoute);

app.listen(port, (err) => {
  if (err) {
    console.log('Error in running server: ' + err);
  } else {
    console.log('Server started running on Port ' + port);
  }
});
