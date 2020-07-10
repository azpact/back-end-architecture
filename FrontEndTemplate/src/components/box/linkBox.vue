<template>
	<div id="linkBox">
		<div>
			<iconTitleRotate180 :name="title" :icon="icon"></iconTitleRotate180>
			<div v-for="(item,index) in more" :key="index">
				<a :href="item.href" class="btn">{{item.name}}</a>
			</div>
		</div>
		<ul class="item">
			<li v-for="(item,index) in list">
				<i class="material-icons">lightbulb_outline</i>
				<a :href="item.href">{{item.name}}</a>
			</li>
		</ul>
	</div>
</template>

<script>
const iconTitleRotate180 = () => import("@c/icon/iconTitleRotate180.vue")

export default {
  name: 'linkBox',
  data:()=>({
  	//
  }),
  components:{
  	iconTitleRotate180
  },
  props:{
  	list:{
  		type: Array,
  		default: () => {
  			return []
  		}
  	},
  	more:{
  		type: Array,
  		default: () => {
  			return []
  		}
  	},
  	title:{
  		type: String,
  		default: '首頁'
  	},
  	icon:{
  		type: String,
  		default: 'home'
  	}
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/style.scss";
#linkBox{
	width:100%;
	background:linear-gradient(20deg, $color7 1%, $color8 26%); 
	border:1px solid $color7;
	.material-icons{
		transform: rotate(180deg)
	}
	.item{
		display:flex;
		flex-wrap:wrap;
		.material-icons{
			transform: rotate(0deg);
			border:none;
			transition:all .3s;			
		}
		li{
			display:flex;
			align-items:center;
			height:2.5rem;
			padding-left:1rem;
			font-weight:bold;
			color:$main1;
			&:hover{
				color:$assit7;
				.material-icons{
					transform: rotate(15deg);
				}
			}
		}
		a{
			display:block;
			color:$main1;
			padding-left:0.5rem;
			&:hover{
				color:$assit7;
			}
		}
		i{
			height:2rem;
			line-height:2rem;
			border:1px solid $main1;
			border-radius:50%;
			width:26px;
			height:26px;
			text-align:center;
			display:block;
		}
	}
	&>div{
		display:flex;
		justify-content:space-between;
		a{
			background-color:$warning;
			&:hover{
			background-color:$warning3;
			}
		}

	}
}
@media (min-width: 1000px) and (max-width: 1493px){
	#linkBox{
		height:10rem;
	}
}
@media (min-width: 748px) and (max-width:999px){
	#linkBox{
		height:10rem;
	}
}
@media (max-width: 747px){
	#linkBox{
		height:15rem;
	}
}
</style>
