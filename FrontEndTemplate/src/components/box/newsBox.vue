<template>
	<div id="newsBox">
		<div>
			<iconTitleRotate180 icon="keyboard_backspace" name="最新消息"></iconTitleRotate180>
			<div v-for="(item,index) in more" :key="index" class="more">
			<a :href="item.href" class="btn">{{item.name}}</a>
			</div>  
		</div>
		<div>
			<section>
				<div v-for="(item,index) in list" :key="index" >
				<img 
				:src="item.imgSrc" 
				:alt="item.name"
				v-if="index == newIndex"
				>
				</div>
			</section>
			<section>
				<verticalScrollText>
   				 	  <ul class="item">
        		   		 <li v-for="(item,index) in list" @mouseover="fMouseoverIndex(index)" :key="index">
        		        	<p class="truncate">
        		        		<a :href="item.href">
        		        			<i>{{item.data}}</i> 
        		        			{{item.name}}
        		        		</a>
        		        	</p>
        		    	</li>
        				</ul>
   				</verticalScrollText>
			</section>
		</div> 		 
	</div>
</template>

<script>
const iconTitleRotate180 = () => import("@c/icon/iconTitleRotate180.vue")
const verticalScrollText = () => import("@c/scroll/verticalScrollText.vue")

export default {
  name: 'newsBox',
  data:()=>({
 	newIndex:1,
  }),
  components:{
  	iconTitleRotate180,
  	verticalScrollText
  },
  props:{
  	list: {
  		type: Array,
  		default: () => {
  			return []
  		}
  	},
  	img: {
  		type: String,
  		default: () => {
  			return ''
  		}
  	},
  	more: {
  		type: Array,
  		default: () => {
  			return []
  		}
  	}
  },
  methods:{
  	fMouseoverIndex(index){
  		this.newIndex = index
  	}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/style.scss";
	
#newsBox{
	display:flex;
	flex-wrap:wrap;
	width:50%;
	min-width:530px;
	overflow:hidden;
	background:linear-gradient(20deg, $color7 1%, $color8 26%); 
	border:1px solid $color7;
	&>div:nth-of-type(1){
		width:100%;
		display:flex;
		justify-content:space-between;
		.more{
			a{
				background-color:$warning;
				&:hover{
					background-color:$warning3;
				}
			}
		}
	}
	&>div:nth-of-type(2){
		display:flex;
		width:100%;
		section:nth-of-type(1){
			padding:1rem;
			img{
				margin-top:0.5rem;
				max-width:160px;
				min-width:160px;
				max-height:120px;
				min-height:120px;
			}
		}
		section:nth-of-type(2){
			width:100%;
				a{
					color:$main1;
				}
				i{
					color:$assit7;
					margin-right:0.5rem;
				}
				p{
					padding:4px 0;
					width:335px;
				}
			}
	}
}

@media (max-width: 747px){
	img{
		display:none;
	}
	#newsBox{
		min-width:100px;
		&>div:nth-of-type(2){
			&>section:nth-of-type(2){
				margin-left:-1rem;
			}
		}
	}
}
</style>
