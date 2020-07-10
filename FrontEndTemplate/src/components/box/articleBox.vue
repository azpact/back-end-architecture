<template>
	<div id="articleBox">
		<div class="item">
			<section v-for="(item,index) in list" :key="index">
				<div>
					<img :src="item.imgOne">
				</div>
				<div class="imgTwo">
					<img :src="item.imgTwo">
					<pre>{{item.name}}</pre>
				</div>
				<div>
					<h3>{{item.title}}</h3>
				</div>
				<div v-for="(itemMore,indexMore) in more" :key="indexMore">
					<a :href="itemMore.href" class="btn">{{itemMore.name}}</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>


export default {
  name: 'articleBox',
  data:()=>({
  	// data
  }),
  props:{
  	list: {
  		type: Array,
  		default: () => {
  			return []
  		}
  	},
  	more: {
  		type: Array,
  		default: () => {
  			return []
  		}
  	}
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/style.scss";
#articleBox{
	.item{
		img{
			width:160px;
		}
		div{
			display:flex;
			justify-content:center;
		}
		&>section{
			display:flex;
			flex-wrap:wrap;
			justify-content:space-between;
			background-color:$color8;
			border:1px solid $color7;
			&>div:nth-of-type(1){
				width:100%;
				img{
					width:100%;
				}
			}
			&>div:nth-of-type(2){
				padding-top:0.5rem;
				justify-content:flex-start;
				align-items:center;
				img{
					min-width:25%
				}
				pre{
					margin:0;
					padding:1.5rem;
					white-space: pre-wrap;
					font-size:14px;
				}
			}
			&>div:nth-of-type(3),
			&>div:nth-of-type(4){
				background-color:$assit2;
			}
			&>div:nth-of-type(3){
				width:60%;
				align-items:center;
				justify-content:flex-start;
				border-radius:0 20px 0 0;
				h3{
					font-weight:bold;
					margin:0;
					padding-left:1rem;
				}
			}
			&>div:nth-of-type(4){
				width:40%;
				align-items:end;
				justify-content:flex-end;
				margin-top:2.8rem;
				height:23.1px;
				a{
					height:23.1px;
					line-height:23.1px;
					margin:0;
					background-color:$warning;
					box-shadow:none;
					&:hover{
						background-color:$warning3;
					}
				}
			}
		}
	}
}
@media (max-width: 747px){
	#articleBox{
		.item{
			section{
				.imgTwo{
					display:flex;
					flex-wrap:wrap;
					img{
						margin:0 auto;
					}
				}
			}
		}
	}
}
</style>
