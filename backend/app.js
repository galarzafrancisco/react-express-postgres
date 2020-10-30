// app.js

// BASE SETUP
// =============================================================================

const db = require('./modules/db/db')
// Global variables
// -----------------------------------------------------------------------------


// Requirements
// -----------------------------------------------------------------------------
const express = require('express');
const bodyParser = require('body-parser');


// Create the app
// -----------------------------------------------------------------------------
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Session
const sessions = require('./sessions/sessions');
app.use(sessions);

// Authorize cross origin
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Serve static content
app.use(express.static('static'));

// API
const api = require('./routes/api');
app.use('/api', api);

// Health
const health = require('./routes/health/route');
app.use('/health', health);

// Default
const defaultRoute = require('./routes/defaultRoute');
app.use(defaultRoute);

// Exporting the app to be loaded on the server
module.exports = {
  app: app
};
