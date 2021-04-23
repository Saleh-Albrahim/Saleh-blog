const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const ErrorResponse = require('../utils/errorResponse');

router.get('/', async (req, res, next) => {
  try {
    const blogList = await Blog.find();

    const header = {
      title: "Saleh blog",
      body: "Welcome to the best blog in the world !"
    };

    res.render('homeView', { blogList, header });
  }
  catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
});

router.get('/blog/:id', (req, res, next) => {
  try {
    res.render('index');
  }
  catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
});

router.get('/add', (req, res, next) => {
  try {
    const header = {
      title: "Add blog",
      body: "Add new blog"
    };


    res.render('addBlogView', { header });

  }
  catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
});

router.post('/add', async (req, res, next) => {

  try {
    const { title, content, user } = req.body;
    if (!title || !content || !user) {
      return next(new ErrorResponse('Please fill all the fields', 400));
    }

    await Blog.create(req.body);

    res.redirect('/');
  }
  catch (error) {
    return next(new ErrorResponse(error.message, 500));
  }
});


module.exports = router;
