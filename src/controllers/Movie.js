const { toCheckInput } = require('../utils/inputDistinguish.js')
// 回傳 true 代表有空值，回傳 false 代表沒有空值
const { cors } = require('../utils/cors.js')
const { json, obj } = require('../utils/json.js')
const MovieSchema = require('../modules/Movie.js')

module.exports = {
	create: async( ctx ) => {
		cors(ctx)
		let movie = obj(ctx.request.body)
		let totoCheckInput = toCheckInput(movie)
		// 201 已新增
		// 400 有欄位未填寫
		if(totoCheckInput){
			ctx.status = 400
			ctx.body = json("有欄位未填寫完整");
		}else{
			let movieDoc = MovieSchema({
				name:movie.name,
				author:movie.author,
				star:movie.star,
				year:movie.year
			})
			let result = await movieDoc.save().then((doc)=>{
				return doc
			})
			ctx.status = 201
			let id = result._id
			ctx.body = json(id);
		}
	},
	read: async( ctx ) => {
		cors(ctx)
		// 200 附上內容
		// 400 有欄位未填寫
		let result = await MovieSchema.find({}).then((doc)=>{
			return doc
		})
		let totoCheckInput = toCheckInput(result)
		if(totoCheckInput){
			ctx.status = 204
			ctx.body = json("尚未找到電影")
		} else{
			ctx.status = 200
			ctx.body = json(result)
		}
	},
	readOne: async( ctx ) => {
		cors(ctx)
		// 200 附上內容
		// 400 有欄位未填寫完整
		// 404 電影不存在
		let id = ctx.params.id
		let result = []
		// 如果是使用 _id 搜尋的話要符合大小 24 個字源
		// 否則 moogose 會錯誤
		if(id.length == 24){
			result = await MovieSchema.find({"_id":id}).then((doc)=>{
				return doc
			})
		}

		if(id === undefined || id === 'null'){
			ctx.status = 400
			ctx.body = json("有欄位未填寫完整")
		} else if(id.length != 24){
			ctx.status = 400
			ctx.body = json("欄位未達 24 字元")
		} else if(result[0]  === undefined){
			ctx.status = 404
			ctx.body = json("電影不存在")
		} else{
			ctx.status = 200
			ctx.body = json(result)
		}
	},
	update: async( ctx ) => {
		cors(ctx)
		// 204 已編輯
		// 400 有欄位未填寫完整
		// 404 電影不存在
		let id = ctx.params.id
		let result = []
		if(id.length == 24){
			result = await MovieSchema.find({"_id":id}).then((doc)=>{
				return doc
			})
		}
		let theMovie = obj(ctx.request.body)

		
		if(id === undefined || id === 'null'){
			ctx.status = 400
			ctx.body = json("有欄位未填寫完整")
		} else if(id.length != 24){
			ctx.status = 400
			ctx.body = json("欄位未達 24 字元")
		} else if(result[0]  === undefined){
			ctx.status = 404
			ctx.body = json("電影不存在")
		} else{
			ctx.status = 204
			let updateResult = await MovieSchema.updateOne({"_id":id},{
				"name": theMovie.name,
				"author": theMovie.author,
				"star": theMovie.star,
				"year": theMovie.year
			}).then((doc)=>{
				return doc
			})
			ctx.body = json('update')
		}
	},
	delete: async( ctx ) => {
		// 204 已刪除
		// 400 有欄位未填寫
		// 404 電影不存在
		let id = ctx.params.id
		let result = []
		// 如果是使用 _id 搜尋的話要符合大小 24 個字源
		// 否則 moogose 會錯誤
		if(id.length == 24){
			result = await MovieSchema.find({"_id":id}).then((doc)=>{
				return doc
			})
		}
		if(id === undefined){
			ctx.status = 400
			ctx.body = "有欄位未填寫"
		} 
		else if(result[0]  === undefined){
			ctx.status = 404
			ctx.body = "電影不存在"
		}
		else {
			await MovieSchema.remove({"_id": id})
			// 204 無法傳遞 ctx.body
			ctx.status = 204
		}
	}
}