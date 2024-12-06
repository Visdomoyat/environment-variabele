const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('The server is running');
});

app.listen(3006, () => {
  console.log('Listening on port 3006');
  console.log(`Your secret is ${process.env.SECRET_PASSWORD}`);
});
