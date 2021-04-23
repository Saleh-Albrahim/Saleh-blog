const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
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

router.get('/blog/:id', async (req, res, next) => {
  try {

    console.log('req.params.id :>> ', req.params.id);
    const blog = await Blog.findById(req.params.id);

    // if (!blog) {
    //   return next(new ErrorResponse("There is no blod with this id", 400));
    // }

    console.log(blog);
    const header = {
      title: blog.title,
      body: `By ${blog.user}`
    };
    res.render('blogView', { blog, header });
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
