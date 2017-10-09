const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = 3005,
      app = express();

app.use(bodyParser.json());
app.use(cors());




app.listen(port, () => console.log('serving port ', port));