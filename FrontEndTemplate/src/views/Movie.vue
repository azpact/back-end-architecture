<template>
	<div id="Movie">
		<section class="from">
			<h2>新增電影</h2>
			<div>
				<label for="">電影名稱</label>
				<input type="text" v-model.trim="movieList.name">
			</div>
			<div>
				<label for="">作者</label>
				<input type="text" v-model.trim="movieList.author">
			</div>
			<div>
				<label for="">評價</label>
				<input type="text" v-model.trim="movieList.star">
			</div>
			<div>
				<label for="">年份</label>
				<input type="text" v-model.trim="movieList.year">
			</div>
			<div>ID: {{movieId}}</div>
			<span>{{movieMessage}}</span>
			<button @click="createMovie()">新增</button>
		</section>
		<section class="from">
			<h2>編輯電影內容</h2>
			<div>
				<label for="">請輸入 ID</label>
				<input type="text" v-model.trim="updataOneId">
			</div>
			<div>
				<button @click="readOneUpdataMovie(updataOneId)">取得單一電影</button>
			</div>
			<div>
				<label for="">電影名稱</label>
				<input type="text" v-model.trim="updateOneMovie.name">
			</div>
			<div>
				<label for="">作者</label>
				<input type="text" v-model.trim="updateOneMovie.author">
			</div>
			<div>
				<label for="">評價</label>
				<input type="text" v-model.trim="updateOneMovie.star">
			</div>
			<div>
				<label for="">年份</label>
				<input type="text" v-model.trim="updateOneMovie.year">
			</div>
			<span>{{updateOneMovie}}</span>
			<button @click="updateMovie()">修改單一電影</button>
			<p>{{movieMessage}}</p>
		</section>
		<section>
			<h2>查看全部電影</h2>
			<button @click="readAllMovie()">查詢全部</button>
			<table>
				<div v-if="!movies">目前尚未設定相關電影</div>
				<div v-else>
					<tr>
						<th>ID</th>
						<th>電影名稱</th>
						<th>電影作者</th>
						<th>評價</th>
						<th>年份</th>
					</tr>
					<tr v-for="(item,index) in movies">
						<td>{{item._id}}</td>
						<td>{{item.name}}</td>
						<td>{{item.author}}</td>
						<td>{{item.star}}顆星</td>
						<td>{{item.year}}年</td>
					</tr>
				</div>
			</table>
		</section>
		<section>
			<h2>查看單一個電影</h2>
			<div>
				<label>請輸入 ID</label>
				<input type="text" v-model.trim="readOneId">
				<button @click="readOneMovie(readOneId)">查看單一電影</button>
				<span>{{movieMessage}}</span>
				<table>
				<div v-if="movie == '有欄位未填寫完整' || movie == null">目前尚未設定相關電影</div>
				<div v-else>
					<tr>
						<th>ID</th>
						<th>電影名稱</th>
						<th>電影作者</th>
						<th>評價</th>
						<th>年份</th>
					</tr>
					<tr v-for="(item,index) in movie">
						<td>{{item._id}}</td>
						<td>{{item.name}}</td>
						<td>{{item.author}}</td>
						<td>{{item.star}}顆星</td>
						<td>{{item.year}}年</td>
					</tr>
				</div>
			</table>
			</div>
		</section>
		<section>
			<h2>刪除一個電影</h2>
			<div>
				<label>請輸入 ID</label>
				<input type="text" v-model.trim="delectOneId">
				<button @click="deleteMovie(delectOneId)">刪除單一電影</button>
				<span>{{movieMessage}}</span>
			</div>
		</section>
	</div>
</template>

<script>
import CRUD from "@u/mixin/CRUD.js"

export default {
	name: 'Movie',
	mixins:[CRUD],
	data:()=>({
		movieList:{
			name:"007",
			author:"alen",
			star:3,
			year:2010
		},
		readOneId:null,
		delectOneId:null,
		updataOneId:null
	}),
	computed:{
		movies(){
			return this.$store.states.movies
		},
		movie(){
			return this.$store.states.movie
		},
		movieId(){
			return this.$store.states.movieId
		},
		updateOneMovie(){
			return this.$store.states.updateOneMovie
		},
		movieMessage(){
			return this.$store.states.movieMessage
		}
	},
	methods:{
		createMovie(){
			this.crud('post','createMovie','movie',this.movieList)
		},
		readAllMovie(){
			this.crud('get','readAllMovie','movie')
		},
		readOneMovie(id){
			let regu = "^[ ]+$";
			let re = new RegExp(regu)
			if(id == null || id == '' || id.length == 0 || re.test(id)){
				this.$store.states.movieMessage = "有欄位未填寫完整"
			}else{
				let URL = `movie/${id}`
				this.crud('get','readOneMovie',URL)
				this.readOneId = null
				this.$store.states.movieMessage = null
			}
		},
		readOneUpdataMovie(id){
			let regu = "^[ ]+$";
			let re = new RegExp(regu)
			if(id == null || id == '' || id.length == 0 || re.test(id)){
				this.$store.states.movieMessage = "有欄位未填寫完整"
			}else{
				let URL = `movie/${id}`
				this.crud('get','readOneUpdataMovie',URL)
				this.readOneId = null
				this.$store.states.movieMessage = null
			}
		},
		deleteMovie(id){
			let regu = "^[ ]+$";
			let re = new RegExp(regu)

			if(id == null || id == '' || id.length == 0 || re.test(id)){
				this.$store.states.movieMessage = "有欄位未填寫 "
			}else{
				let URL = `movie/${id}`
				this.crud('delete','deleteMovie',URL)
				this.delectOneId = null
				this.$store.states.movieMessage = null
			}
		},
		updateMovie(){
			let regu = "^[ ]+$";
			let re = new RegExp(regu)

			let checkName = ( this.updateOneMovie.name == null || this.updateOneMovie.name == '' || this.updateOneMovie.name.length == 0 || re.test(this.updateOneMovie.name))
			let checkAuthor = (this.updateOneMovie.author == null || this.updateOneMovie.author == '' || this.updateOneMovie.author.length == 0 || re.test(this.updateOneMovie.author))
			let checkStar = (this.updateOneMovie.star == null || this.updateOneMovie.star == '' || this.updateOneMovie.star.length == 0 || re.test(this.updateOneMovie.star))
			let checkYear = (this.updateOneMovie.year == null || this.updateOneMovie.year == '' || this.updateOneMovie.year.length == 0 || re.test(this.updateOneMovie.year))

			if(checkName || checkAuthor || checkStar || checkYear){
				this.$store.states.movieMessage = "有欄位未填寫 "
			} else{
				let id = this.updateOneMovie._id
				let URL = `movie/${id}`
				this.crud('put','updateMovie',URL,this.updateOneMovie)
				// this.delectOneId = null

				this.$store.states.movieMessage = null
			}
		}
	},
	mounted(){
		// this.crud('get','readMovie','movie')
	}
};
</script>

<style lang="scss" scoped>
#Movie{
	margin:0.7rem;
	h2{
		font-size:1.25rem;
		background-color:#111;
		padding:0.7rem;
		color:#FFF;
		display:block;
	}
	.from{
		label{
			text-align:center;
			min-width:5rem;
			font-size:1.1rem;
			color:#111;
		}
		div{
			display:flex;
			align-items:center;
		}
	}
}
</style>
