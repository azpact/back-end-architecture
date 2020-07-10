<template>
	<div id="TheKeyWordBar">
		<div class="one">
			<section class="container">
				<div>
					<a class="btn-floating pulse">
						<i class="material-icons">menu</i>
					</a>
				</div>
				<div>
					<ThePhoneKeyWrod></ThePhoneKeyWrod>
				</div>
				<div>
					<ThePhoneSearch></ThePhoneSearch>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
const ThePhoneKeyWrod = () => import("@c/app/ThePhoneKeyWrod.vue");
const ThePhoneSearch = () => import("@c/app/ThePhoneSearch.vue");

export default {
	name: 'TheKeyWordBar',
	data:()=>({
		data:null,
		scrollTop:null,
		
		keywordList:[
		{name:"能量飲食",href:"#!"},
		{name:"肌肉訓練",href:"#!"},
		{name:"菜單",href:"#!"},
		{name:"訓練技巧",href:"#!"},
		]
	}),
	components:{
		ThePhoneKeyWrod,
		ThePhoneSearch
	}
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#TheKeyWordBar{
	color:$main1;
	.one{
	z-index:99;
	display:flex;
		position: fixed;
		height:4.2rem;
		top: 0;
		left: 0;
		width: 100%;
		border-bottom:4px solid $assit1;
		background-color: $background1;
		i{
			color:$color1;
			margin-top:0.2rem;
				&:hover{
				color:$assit2;
			}
		}
		 img{
			margin-left: 0.5rem;
			width: 32px;
			height: 32px;
		}
		&>section{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			&>div:nth-of-type(1){
			display:none;
		}
			
		}
		div{
			display: flex;
			justify-items: center;
			align-items: center;
			max-height: 1rem;
			line-height: 1rem;
		}
	}
}

@media (max-width: 747px){
.one {
	display: none !important;
}
}
</style>
