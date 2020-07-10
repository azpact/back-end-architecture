export default {
	modifyName(state, data){
		return state.testName = data
	},
	countNum(state, type){
		if(type){
			return state.count + 1
		}else{
			return state.count - 1
		}
	},
	OnMessage(state, data){
		return state.WsList = data
	},
	OnServerMessage(state, data){
		return state.WsList = data
	},
}