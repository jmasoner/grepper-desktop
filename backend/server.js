const express = require('express');
const bodyParser = require('body-parser');
const inject = require('./inject');
const retry = require('./retry');
const rollback = require('./rollback');
const suggestTag = require('./suggestTag');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/inject', inject);
app.post('/retry', retry);
app.post('/rollback', rollback);
app.post('/suggestTag', suggestTag);

app.get('/changelog', (req, res) => {
  const log = fs.readFileSync('changelog/insertion-log.txt', 'utf8');
  res.send(log);
});

app.get('/fallback', (req, res) => {
  const queue = JSON.parse(fs.readFileSync('fallback/fallback-queue.json'));
  res.json(queue);
});

app.listen(4000, () => console.log('🚀 Grepper backend running on port 4000'));