// Little Scientists Website NodeJS Backend
// By Abhi Nayar for SemiErect Design. Co.
// Copyright (c) 2018, All Rights Reserved
// This work may not be copied without the express permission of Little Scientists, Inc.
// Please call 1-800-FACT-FUN for more information.

// import dependencies
var express = require('express'), // Used for routing https://expressjs.com/
path = require('path'), // allows path combinations https://www.npmjs.com/package/path
favicon = require('serve-favicon'), // serves the favicon from spec. folder https://www.npmjs.com/package/serve-favicon
logger = require('morgan'), // logs errors and output to terminal during node run https://www.npmjs.com/package/morgan
cookieParser = require('cookie-parser'), // allows cookie parsing https://www.npmjs.com/package/cookie-parser
bodyParser = require('body-parser'), // allos parsing of req.body in POST requests https://www.npmjs.com/package/body-parser
session = require('express-session'), // express session storage... just using in-memory sessions https://www.npmjs.com/package/express-session
pug = require('pug'), // pug/jade templating language https://www.npmjs.com/package/pug
timeout = require('connect-timeout'), // sets the timeout on the app before we show error https://www.npmjs.com/package/timeout
compression = require('compression'), // gzip compression for nodejs https://www.npmjs.com/package/compression
port = process.env.PORT || 3000;

// import local dependencies
require('dotenv').config(); // loads CONFIG variables from the .env top-level file

// app internal setup
var app = express(); // sets app to use express
app.set('views', path.join(__dirname, 'views')); // sets up view directory
app.set('view engine', 'pug'); // sets view engine to use pug
app.use(favicon(path.join(__dirname, 'public', 'images', 'icons', 'favicon.ico'))); // sets favicon path
app.use(logger('dev')); // uses morgan/logger to log output to terminal
app.use(bodyParser.json()); // uses bodyParser to parse req
app.use(bodyParser.urlencoded({ extended : true })); // Parses the text as URL encoded data, extended extends UTF chars
app.use(cookieParser('secret')); // sets the session secret
// set up session storage
// No session storage setup - FUTURE DEV NOTE: May want to set up Redis, FirebaseStore or other persistent session storage mech.
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'public'))); // sets static file directory path
app.use(compression()); // uses compression
app.use(timeout('100s')); // sets timeout interval

// set up routing
var routes = require('./routes');
app.use('/', routes);

// error catching
// stacktrace in dev., dislay error page in prod
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    console.log(err);
    res.render('error', {
      meta : {
        title: '404 Page Not Found'
      }
    })
  });
}
app.use(function (err, req, res, next) {
  // eslint-disable-line no-unused-vars
  res.status(err.status || 404);
  // log the error for heroku logs
  console.log('error', err);
  res.render('error', {});
});

// serve the app on PORT variable
// if using Heroku, this will be automatically set
var server = app.listen(port, function(err) {
  if (err) {
    console.log('App listening error ', err);
  } else {
    console.log('App running at ', port)
  }
});
