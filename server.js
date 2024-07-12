/* eslint-disable */
const express = require('express');
const path = require('path');
const request = require('request');
const app = express();

const API_URL = 'https://cdn-dev.preoday.com/challenge';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Proxy API requests
app.use('/api', (req, res) => {
  const url = `${API_URL}${req.url}`;
  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

// Serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
