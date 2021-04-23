const express = require('express');
const path = require('path');
const errorHandler = require('./middleware/error');
const ErrorResponse = require('./utils/errorResponse');
const connectDB = require('./config/db');
require('colors');

const app = express();

// Connect to mongo database
connectDB();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body parser
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/mainRoute'));

// Catch 404 to route does not exist and forward it to the error handler
app.use((req, res, next) => {
  return next(new ErrorResponse('Not found', 404));
});

// Handle all the errors
app.use(errorHandler);



const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in on http://localhost:${PORT}`.yellow.bold));

module.exports = app;
