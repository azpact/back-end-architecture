import { UserServer, UserMovie } from '../common/fetch.js'

export default {
	fGetAriticle(state, data){
		UserServer
		.GET()
		.then((res) =>(
			state.listArticle = res.data
			))
	},
	fPostAriticle(state, data){
		UserServer
		.POST(data)
		.then((res)=>{
			switch (res.status) {
				case 200:
				state.listArticle = res.data
				break;
				default:
				state.listArticle = '伺服器..'
				break;
			}
		})
	},
	fDeleteAriticle(state, data){
		UserServer
		.DELETE()
		.then((res)=>{
			state.listArticle = res.data
		})
	},
	fLogin(state, data){
		console.log(data)
	},
	get(state,data){
		UserServer
		.GET()
		.then((res)=>{
			state.getData = data
		})
	},
	createMovie(state, data){
		// data[0] url data[1] data
		UserMovie.POST(data[0],data[1]).then((res)=>{
			if(res.data == 201){
				state.movieId = res.data
				state.movieMessage = null
			}else{
				state.movieMessage = res.data
			}
		})
	},
	readAllMovie(state, data){
		UserMovie.GET(data[0]).then((res)=>{
			state.movies = res.data
		})
	},
	readOneMovie(state, data){
		UserMovie.GET(data[0]).then((res)=>{
			if(res.status == 200){
				state.movie = res.data
			}else{
				state.movieMessage = res.data
				state.movie = null
			}
		})
	},
	readOneUpdataMovie(state, data){
		UserMovie.GET(data[0]).then((res)=>{
			if(res.status == 200){
				state.updateOneMovie = res.data[0]
			}else{
				state.movieMessage = res.data
				state.updateMovie = null
			}
		})
	},
	updateMovie(state, data){
		UserMovie.PUT(data[0],data[1]).then((res)=>{
			state.movieMessage = res.data
		})
	},
	nullUpdateOneMovie(state, data){
		state.updateOneMovie = {
			name:null,
			author:null,
			star:null,
			year:null
		}
	},
	deleteMovie(state, data){
		UserMovie.DELETE(data[0]).then((res)=>{
			if(res.status == 204){
				state.movieMessage = res.status
			} else{
				state.movieMessage = res.data
			}
		})
	}
}
