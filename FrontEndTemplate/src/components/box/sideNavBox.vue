<template>
	<div id="sideNavBox">
		<div>
			<h2>服務項目</h2>
		</div>
		<ul class="item">
			<li 
			v-for="(item,index) in list" 
			:key="index" 
			>
				<div>
					<img :src="item.srcOne">
					<img :src="item.srcTwo">
					<p>{{item.name}}</p>
				</div>
				<ul>
					<li 
					v-for="(itemTwo,indexTwo) in item.option" 
					:key="indexTwo">
						<a :href="item.href">{{itemTwo.name}}</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>


export default {
  name: 'sideNavBox',
  data(){
    return {
    	isShow:null,
    };
  },
  props:{
  	list: {
  		type: Array,
  		default: () => {
  			return []
  		}
  	}
  },
  computed:{

  },
  methods:{
  	// fMouse(type,index){
  	// 	switch (type) {
  	// 		case 1:
  	// 			this.isShow = index
  	// 			break;
  	// 		case 2:
  	// 			this.isShow = null
  	// 			break;
  	// 		default:
  	// 			break;
  	// 	}
  	// }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/style.scss";

#sideNavBox{
	background:linear-gradient(20deg, $color7 1%, $color8 26%); 
	&>div{
		width:8rem;
		text-align:center;
		background-color:$main1;
		color:$color1;
		height:3rem;
		line-height:3.5rem;
		margin-bottom:-1rem;
		h2{
			font-size:1.5rem;
			margin:0;
			font-weight:bold;
		}
	}
	ul.item{
		&>li{
			width:8rem;
			height:6rem;
			text-align:center;
			p{
				margin:0;
				width:100%;
			}
			img{
				width:48px;
				height:48px;
			}
			ul{
				display:none;
			}
			&>div{
				height:6rem;
				display:flex;
				justify-content:center;
				align-items:center;
				flex-wrap:wrap;
				overflow:hidden;
				.material-icons{
					font-size:3.5rem;
					margin-top:0.9rem;
				}
				img:nth-of-type(2){
					display:none;
				}
			}
			&:hover{
				background-color:$assit1;
				font-weight:bold;
				ul{
					display:block;
				}
				img:nth-of-type(1){
					display:none;
				}
				img:nth-of-type(2){
					display:block;
					animation-name: mymove;
  					animation-duration: 1.2s;
  					animation-timing-function: ease-out;
  					animation-iteration-count: infinite;
				}
				
			}
		}
		ul{
			position:relative;
			top:-6rem;
			left:8rem;
			a{
				width:10rem;
				display:block;
				background-color:$main1;
				color:$color1;
				height:3.5rem;
				line-height:3.5rem;
				font-size:1.25rem;
			}
			a:hover{
				color:$color1;
				text-shadow: $color1 0px 0px 10px;
			}
		}
	}
	
}

@keyframes mymove {
	0%,75% {
		transform: rotate(0deg);
	}
	80%{
		transform: rotate(15deg);
	}
	85%{
		transform: rotate(-15deg);
	}
	90%{
		transform: rotate(5deg);
	}
	95%{
		transform: rotate(-5deg);
	}
	100% {
		transform: rotate(0deg);
	}
}
</style>
