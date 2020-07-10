<template>
	<div id="TheArticle">
		<h1>新增文章</h1>
		<div>
			<label>標題</label>
			<input type="text" v-model="title">
		</div>
		<div>
			<label>內容</label>
			<input type="text" v-model="body">
		</div>
		<div>
			<label>作者</label>
			<input type="text" v-model="author">
		</div>
		{{listArticle}}
		<button @click="fGetAriticle()">GET</button>
		data: <input type="text" v-model="data.username">
		<button @click="fPostAriticle()">POST</button>
		<button @click="fDeleteAriticle()">DELETE</button>

		<!-- <div v-for="(item,index) in listArticle" :key="index">
			<span>name: {{item.name}}</span>
			
		</div> -->
		<!-- <p>show:: {{show}} / status: {{status}}</p> -->
	</div>
</template>

<script>
export default {
  name: 'TheArticle',
  data() {
    return {
    	title:null,
    	body:null,
    	author:null,
    	data:{username: 'Ben',age: '006'},
    };
  },
  computed:{
  	listArticle(){
  		return this.$store.states.listArticle
  	}
  },
  methods:{
  	fGetAriticle(){
  		this.$store.dispatch('fGetAriticle')
  	},
  	fPostAriticle(){
  		this.$store.dispatch('fPostAriticle',this.data)
  	},
  	fDeleteAriticle(){
  		this.$store.dispatch('fDeleteAriticle',)
  	}
  },
};
</script>

<style lang="scss" scoped>
#TheArticle {
	padding: 0 2rem;
}
</style>
