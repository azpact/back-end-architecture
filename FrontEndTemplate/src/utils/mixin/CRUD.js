export default {
	methods:{
		crud(type, method, url, data = ""){
			let theData = [url, data]
			if(type){
				this.$store.dispatch(method,theData)
			}
		}
	}
}