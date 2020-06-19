// const { encrypt, confirm } = require('../utils/bcrypt.js')


// 引入 controller
const ConnectController = require('../controllers/Connect.js')

module.exports = (app) => {
	const Router = require('koa-router');
	const router = new Router({
		prefix: '/api/v1'
	});
    
	router.get('/', ctx => {ctx.body = '首頁'})
	router.get('/about', ctx => {ctx.body = '關於頁面'})
	router.get('/connect/save', ConnectController.save)
	router.get('/connect/findAll', ConnectController.findAll)
	router.get('/connect/findOne', ConnectController.findOne)
	router.get('/connect/updateOne', ConnectController.updateOne)
	router.get('/connect/updateMany', ConnectController.updateMany)
	router.get('/connect/remove', ConnectController.remove)

	app.use(router.routes()).use(router.allowedMethods())
}
