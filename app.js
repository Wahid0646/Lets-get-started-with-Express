const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.get('/', (req, res,) => {
  console.log('Second middleware');
  res.setHeader('Cache-Control', 'no-cache');
  res.send("<h1>Hello From Express</h1>");
});

app.listen(3000)