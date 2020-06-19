const StudentModule = require('../modules/Connect.js')

module.exports = {
	save: async( ctx ) => {
		let studentDoc = StudentModule({
			name: 'Ben',
			age:20
		})
		let result = await studentDoc.save().then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
	findAll: async ( ctx ) => {
		let result = await StudentModule.find({}).then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
	findOne: async ( ctx ) => {
		let result = await StudentModule.find({age:20}).then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
	// 第一個是查詢，第二個是修改
	// 更新所找到的第一條紀錄
	updateOne: async ( ctx ) => {
		let result = await StudentModule.updateOne({age: 20}, {age: 99}).then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
	// 終端的輸出{ n: 1, nModified: 1, ok: 1 }的意思是
	// n: 1 ：查詢到1條記錄
	// nModified: 1：需要修改1條記錄。（如果修改值和原始值相同，則需要修改的就是0條）
	// ok: 1 ：修改成功1條。
	updateMany: async ( ctx ) => {
		let result = await StudentModule.updateMany({age: 20}, {age: 99}).then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
	// 找到全部紀錄，直接刪除整行
	remove: async ( ctx ) => {
		let result = await StudentModule.remove({name: "Ben"}).then((doc)=>{
			return doc
		})
		ctx.body = result;
	},
}