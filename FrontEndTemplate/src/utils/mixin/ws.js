import Vue from 'vue';

export default {
	data:()=>({
		websock:null,
		readyState:null
	}),
	created(){
		this.initWebSocket();
	},
	destroyed() {
		this.websock.close()
       // 離開路由後斷開 websocket 連結
   },
   methods:{
   	initWebSocket(){
   		const wsurl = 'ws://localhost:3000';
   		this.websock = new WebSocket(wsurl);
   		this.readyState = this.websock.readyState;
   		this.websock.onopen = this.websocketonopen;
   		this.websock.onerror = this.websocketonerror;
   		this.websock.onclose = this.websocketclose;
   		this.websock.onmessage = this.websocketonmessage
   		this.OnServerMessage('')
   	},
      // 連結建立之後執行 send 方法發送數據
      websocketonopen(e){
      	this.websock.send('FrontEnd send to BackEnd')
      }, 
      // 連結建立失敗重連
      websocketonerror(){
      	this.initWebSocket();
      	this.OnServerMessage('')
      },
      // 數據接收
      websocketonmessage(e){
      	let result = JSON.parse(e.data)
      	this.OnMessage(result)
      },
      // 數據發送
      websocketsend(){
      	let data = {name:"166"}
      	let str = JSON.stringify(data)
      	this.websock.send(str)
      },
      // 關閉
      websocketclose(e){
      	this.OnMessage('請求失敗處理\n請確認伺服器是否正常運作')
      },
      OnMessage(val){
      	this.$store.commit('OnMessage',val)
      },
      OnServerMessage(val){
      	this.$store.commit('OnServerMessage',val)
      }
  },
}

