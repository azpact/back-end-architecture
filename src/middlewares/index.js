const favicon = require('koa-favicon');
const logger = require('koa-logger');
const json = require('koa-json');
const path = require('path');
const ip = require('ip');

// 引入 middlewares
const miLog = require('./mi-log')

module.exports = (app) => {
	// 取得 GET 與 POST 等等資訊
	app.use(logger())
	// 使用網站圖標
	app.use(favicon(path.join(__dirname, '../','public', 'favicon.ico')));
	// 總是美化 json 數據
	app.use(json())

	// 關於 middlewares
	app.use(miLog({
    	env: app.env,  // koa 提供的環境變量
    	projectName: 'koa2-tutorial',
    	appLogLevel: 'debug',
    	dir: 'logs',
    	serverIp: ip.address()
	}))
}