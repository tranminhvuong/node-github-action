'use strict';
const Service = require('../services');

const Controller = {
  async getPosts(req, res, next) {
    try {
      const posts = await Service.list();
      return res.status(201).json(posts);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = Controller;
