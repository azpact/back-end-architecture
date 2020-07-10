// const { encrypt, confirm } = require('../utils/bcrypt.js')



// 引入 controller
const ConnectController = require('../controllers/Connect.js')
const ServerController = require('../controllers/Server.js')
const MovieController = require('../controllers/Movie.js')
const CallController = require('../controllers/Call.js')

module.exports = (app) => {
	const bodyParser = require('koa-bodyparser')
	const Router = require('koa-router');
	const router = new Router({
		prefix: '/api/v1'
	});
    
	router.get('/', ctx => {ctx.body = '首頁'})

	router.get('/call', CallController.call)
	router.post('/call', CallController.call)


	router.get('/movie', MovieController.read)
	router.get('/movie/:id',MovieController.readOne)
	router.post('/movie', MovieController.create)
	router.put('/movie/:id', MovieController.update)
	router.delete('/movie', MovieController.delete)
	router.delete('/movie/:id', MovieController.delete)

	// put 
	router.get('/Server/findAll', ServerController.find)
	router.get('/connect/save', ConnectController.save)
	router.get('/connect/findAll', ConnectController.findAll)
	router.get('/connect/findOne', ConnectController.findOne)
	router.get('/connect/updateOne', ConnectController.updateOne)
	router.get('/connect/updateMany', ConnectController.updateMany)
	router.get('/connect/remove', ConnectController.remove)
	
	app.use(bodyParser())  //方便提取 POST 資料
	app.use(router.routes()).use(router.allowedMethods())
}
