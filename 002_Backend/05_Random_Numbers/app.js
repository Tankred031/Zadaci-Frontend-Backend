const express = require('express');
const app = express();
const port = 3000;
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
});
app.get('/coinFlip', function(req, res) {
  const result = Math.floor(Math.random() * 2);
  res.status(200).json({
    result: result === 0 ? 'Heads' : 'Tails'
  });
});
app.get('/diceRoll', function(req, res) {
  const result = Math.floor(Math.random() * 6) + 1;
  res.status(200).json({
    result: result
  });
});
app.get('/randomNumber', function(req, res) {
  const result = Math.floor(Math.random() * 100) + 1;
  res.status(200).json({
    result: result
  });
});