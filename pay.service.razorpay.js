require('./config/config');
require('./db/mongoose');

const express = require('express');
const cors = require('cors');
const path = require('path');
const destPath = path.join(__dirname, 'public');

const app = express();
app.use(cors());

// Use the body-parser package in our application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Route
const api = require('./routes');

app.use('/', api);

const { PORT } = process.env;

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

app.use(express.static(destPath));

app.get('*', function (request, response) {
  const filePath = path.resolve(__dirname, './public', 'index.html');
  response.sendFile(filePath);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
