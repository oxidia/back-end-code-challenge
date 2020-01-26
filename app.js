const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const path = require('path');

const repositoriesRouter = require('./api/routes/repositories');

const app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/repositories', repositoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(error, req, res, next) {
  res.status(error.status || 500).send({
    message: error.message
  });
});

module.exports = app;
