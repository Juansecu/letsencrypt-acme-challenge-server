const express = require('express');

const app = express();

app.get('/.well-known/acme-challenge/:challenge', (req, res) => {
  res.send(process.env.LETSENCRYPT_CHALLENGE);
});

app.listen(80, () => {
  console.log('HTTP server running on port 80');
});
