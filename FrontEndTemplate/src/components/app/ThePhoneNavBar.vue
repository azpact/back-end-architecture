<template>
	<div id="ThePhoneNavBar">
		<ul class="collapsible">
			<li v-for="(item,index) in navList" :key="index">
				<div class="collapsible-header">
					<i class="material-icons">{{item.icon}}</i>
					<a href="#!">{{item.name}}</a>
					<span v-if="item.option">▼</span>
				</div>
				<div class="collapsible-body" v-for="(itemTwo, indexTwo) in item.option" :key="indexTwo">
					<span :style="itemTwo.color">{{itemTwo.type}}</span> <a href="#!">{{itemTwo.name}}</a>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
export default {
	name: 'ThePhoneNavBar',
	data:()=>({
		navList:[
		{name:"最新消息",href:"#!",icon:"chat"},
		{name:"館院資訊",href:"#!",option:[
				{name:"信義館-健美諮詢",href:"#!",type:"北區",color:"background-color:#5FB3FB"}, //0
				{name:"台北館-健美中心",href:"#!",type:"北區",color:"background-color:#5FB3FB"},
				{name:"大安館-健美中心",href:"#!",type:"北區",color:"background-color:#5FB3FB"},
				{name:"林口館-健美中心",href:"#!",type:"北區",color:"background-color:#5FB3FB"},
				{name:"桃園館-健美中心",href:"#!",type:"中區",color:"background-color:#5FB3FB"}, //4
				{name:"新竹館-健美中心",href:"#!",type:"中區",color:"background-color:#659166"},
				{name:"新竹館(中華路二段)-健美中心",href:"#!",type:"中區",color:"background-color:#659166"},
				{name:"台中館-健美中心",href:"#!",type:"中區",color:"background-color:#659166"},
				{name:"台南館-健美中心",href:"#!",type:"南區",color:"background-color:#EF5A5A"}, //8
				{name:"高雄館(總店)-健美中心",href:"#!",type:"南區",color:"background-color:#EF5A5A"},
				{name:"高雄館(中正三路)-健美中心",href:"#!",type:"南區",color:"background-color:#EF5A5A"},
				{name:"上海市(浦東)-健美中心",href:"#!",type:"其他城市",color:"background-color:#404045"}, //11
				{name:"上海市(靜安)-健美中心",href:"#!",type:"其他城市",color:"background-color:#404045"},
				{name:"北京市(北京)-健美中心",href:"#!",type:"其他城市",color:"background-color:#404045"},
				],icon:"local_convenience_store"
			},
			{name:"專業教練",href:"#!",icon:"assignment_ind"},
			{name:"服務項目",href:"#!",option:[
			{name:"養生療法",href:"#!",type:"飲食諮詢",color:"background-color:#5FB3FB"}, //14
			{name:"健康食品",href:"#!",type:"飲食諮詢",color:"background-color:#5FB3FB"},
			{name:"飲食調整",href:"#!",type:"飲食諮詢",color:"background-color:#5FB3FB"},
			{name:"體指檢測",href:"#!",type:"體質諮詢",color:"background-color:#659166"}, //17
			{name:"規劃生活作息",href:"#!",type:"體質諮詢",color:"background-color:#659166"},
			{name:"健身電話諮詢",href:"#!",type:"健身諮詢",color:"background-color:#EF5A5A"}, //19
			{name:"100 日健身計畫",href:"#!",type:"健身諮詢",color:"background-color:#EF5A5A"},
			{name:"預約健身場地",href:"#!",type:"健身諮詢",color:"background-color:#EF5A5A"},
			{name:"申購器材",href:"#!",type:"器材諮詢",color:"background-color:#404045"},  //22
			{name:"適用器材",href:"#!",type:"器材諮詢",color:"background-color:#404045"}
			],icon:"assignment"
		},
		{name:"健身分享",href:"#!",icon:"directions_bike"},
		{name:"其他服務",href:"#!",option:[
		{name:"線上諮詢",href:"#!",type:"其他服務",color:"background-color:#404045"},
		{name:"常見問題",href:"#!",type:"其他服務",color:"background-color:#404045"}
		],icon:"camera_front"
	},
	{name:"諮詢問答",href:"#!",icon:"perm_phone_msg"},
	{name:"線上預約",href:"#!",icon:"contact_phone"},
	{name:"會員專區",href:"#!",icon:"account_box"},
	]
}),
	mounted(){
		$(document).ready(function(){
			$('.collapsible').collapsible();
		});
	}
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#ThePhoneNavBar{
	margin-top:-0.4rem;
	background-color:$color1;
	padding:0.5rem 0.5rem 0 0.5rem;
	max-height:350px;
	overflow-y:auto;
	div.collapsible-header{
		padding:0.5rem 0 0.5rem 0.5rem;
			a{
			margin-left:-0.75rem;
			color:$main1;
			}
	}
	
	div.collapsible-body{
		padding:0.75rem 0 0.75rem 1.2rem;
		background-color:$assit6;
		a{
			color:$main1;
		}
		span{
			padding:0.2rem 0.5rem;
			color:$color1;
			border-radius:10px;
		}
	}
}
</style>
