"use strict";

// const { encrypt, confirm } = require('../utils/bcrypt.js')
module.exports = app => {
  const Router = require('koa-router');

  const router = new Router({
    prefix: '/api/v1'
  });
  router.get('/', ctx => {
    ctx.body = '首頁';
  });
  router.get('/about', ctx => {
    ctx.body = '關於頁面';
  });
  app.use(router.routes()).use(router.allowedMethods());
};