require('dotenv').config()

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("This is a personal server for Ninad Sajwan");
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
