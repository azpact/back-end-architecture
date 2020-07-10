const WsServerModule = require('../modules/WsServer.js')

// 引入資料
const WebSocket = require('ws');
// 建立 Server
const wss = new WebSocket.Server({port:3000});

// 開啟連線
wss.on('connection',async function connection(ws){
	// function and var
	async function waitAndFindAll(){
		// 將代碼返回一個等待一秒的 promise
		await new Promise(r=>setInterval(r,1000))
		return WsServerModule.find({}).then((doc)=>doc)
	}
	async function result(){
		try{
			return await waitAndFindAll()
		}catch(e){
			return '錯誤'
		}
	}
	let ms = await result()

	// 接收 Client 
	ws.on('message',async function incoming(message){
		ms = message
	})
	// 發送給 Client
	ws.send('WebSocket is open now from BackEnd.')
	ws.send(JSON.stringify(ms))

	// 計時發送給 Client
	setInterval(()=>{
		ws.send(JSON.stringify(ms))
	},3000)
})


module.exports = {
	find: async( ctx ) => {
		let result = "66"
		ctx.body =  result
	},
}