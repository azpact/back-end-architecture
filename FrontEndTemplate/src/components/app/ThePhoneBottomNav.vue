<template>
	<div id="ThePhoneBottomNav">
		
		<ul>
			<li v-for="(item,index) in bottomList" :key="index" class="material-icons">
				<a :href="item.href">
					<i class="material-icons">{{item.icon}}</i>
					<p>{{item.name}}</p>
				</a>
			</li>
			<li>
				<a href="#!">
					<i><img :src="img" alt=""></i>
					<p>健美</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import img from "@a/img/peopoeColor.png"

export default {
  name: 'ThePhoneBottomNav',
  data:()=>({
  	img:img,
  	bottomList:[
  		{name:"案例",href:"#!",icon:"account_circle"},
  		{name:"預約",href:"#!",icon:"contact_phone"},
  		{name:"粉絲",href:"#!",icon:"group"},
  		{name:"諮詢",href:"#!",icon:"perm_phone_msg"}
  	]
  })
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#ThePhoneBottomNav{
	display:none;
}
@media (max-width: 747px){
#ThePhoneBottomNav{
	display:block;
	position:fixed;
	z-index:20;
	left:0;
	bottom:0;
	width:100%;
	img{
		width:40px;
		padding-top:0.3rem;
		margin-bottom:-0.3rem;
	}
	ul{
		width:100%;
		display:flex;
		justify-content:space-around;
		margin:0;
		li{
			display:flex;
			justify-content:center;
			background-color:$color2;
			width:100%;
			a{
				// background
			}
		}
		li:nth-of-type(1){
			a{
				color:$success2;
			}
		}
		li:nth-of-type(2){
			a{
				color:$warning2;
			}
		}
		li:nth-of-type(3){
			a{
				color:$assit2;
			}
		}
		li:nth-of-type(4){
			a{
				color:$assit3;
			}
		}
		li:nth-of-type(5){
			a{
				color:$warning;
			}
		}
		i{
			font-size:2.75rem;
			line-height:4rem;
		}
		p{
			margin:0.5rem;
			margin-top:-1rem;
			font-size:1rem;
			font-weight:bold;
		}
	}
}
}
</style>
