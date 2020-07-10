const Koa = require('koa');
const config = require('./config/index.js');
const UseRouter = require('./routers/index.js');
const UseMiddlewares = require('./middlewares/index.js');

const app = new Koa();

UseMiddlewares(app);
UseRouter(app);

app.listen(config.backEndURL);