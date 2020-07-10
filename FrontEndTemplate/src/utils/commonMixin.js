export default {
	data(){
		return{
			dd:"尚未確認"
		}
	},
	methods:{
		fTest(type){
			if(type){
				this.dd = "是真的"
			}else{
				this.dd = "是假的"
			}
		}
	}
}