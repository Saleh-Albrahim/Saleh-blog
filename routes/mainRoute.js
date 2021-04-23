const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/blog/:id', (req, res, next) => {
  res.render('index');
});

router.post('/blog', (req, res, next) => {
  res.render('index');
});


module.exports = router;
