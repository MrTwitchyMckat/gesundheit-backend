const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3030;

app.get('/data', cors(), (req, res) => {
  const dataJson = JSON.parse(fs.readFileSync('data/data.json'))
  res.send(dataJson);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})