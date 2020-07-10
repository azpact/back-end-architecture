<template>
	<div id="ThePhoneKeyWrodBar">
		<span>熱門關鍵字 : </span>
		<a v-for="(item,index) in keywordList" :href="item.href" :key="index">{{item.name}}</a>
	</div>
</template>

<script>
export default {
	name: 'ThePhoneKeyWrodBar',
	data:()=>({
		keywordList:[
		{name:"能量飲食",href:"#!"},
		{name:"肌肉訓練",href:"#!"},
		{name:"菜單",href:"#!"},
		{name:"訓練技巧",href:"#!"},
		]
	}) 
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";

#ThePhoneKeyWrodBar{
	display:flex;
	justify-content:center;
	background-color:$background1;
	margin-top:-0.2rem;
	height:2.2rem;
	line-height:2rem;
	a{
	color:$assit2;
	margin-left: 0.75rem;
	font-weight: bold;
	&:hover{
	text-decoration:underline;
}
}
}
</style>
