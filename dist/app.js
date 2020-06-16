"use strict";

const Koa = require('koa');

const UseRouter = require('./routers/index.js');

const UseMiddlewares = require('./middlewares/index.js');

const app = new Koa();
UseRouter(app);
UseMiddlewares(app);
app.listen(3200);