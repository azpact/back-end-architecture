"use strict";

const favicon = require('koa-favicon');

const json = require('koa-json');

const path = require('path');

module.exports = app => {
  // 使用網站圖標
  app.use(favicon(path.join(__dirname, '../', 'public', 'favicon.ico'))); // 總是美化 json 數據

  app.use(json());
};