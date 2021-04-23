const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

Blog.createCollection();
router.get('/', async (req, res, next) => {

  const blogList = await Blog.find();

  const header = {
    title: "Saleh blog",
    body: "Welcome to the best blog in the world !"
  };

  res.render('homeView', { blogList, header });
});

router.get('/blog/:id', (req, res, next) => {
  res.render('index');
});

router.post('/blog', (req, res, next) => {
  console.log(req.body);
  res.render('index');
});


module.exports = router;
