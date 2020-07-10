module.exports = {
	toCheckInput(obj){
		let toCheckInput = Object.values(obj).map(item=>{
			let regu = "^[ ]+$";
			let re = new RegExp(regu)
			if(item == null || item == '' || item.length == 0 || re.test(item)){
				return false
			}else{
				return true
			}
		})
		let isHaveFalse = toCheckInput.indexOf(false) != -1
		return isHaveFalse
		// 回傳 true 代表有空值
		// 回傳 false 代表沒有空值
	}
}