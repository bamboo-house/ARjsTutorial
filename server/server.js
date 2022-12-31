const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(process.env.port || 3000, () => {
  console.log(`listening at http://localhost:${process.env.port || 3000}`);
});
