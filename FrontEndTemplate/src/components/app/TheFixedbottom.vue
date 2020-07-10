<template>
	<div id="TheFixedbottom">
		<p>網站內提供資料僅供參考，如有任何會員權益有問題，請實際至實體店面由專門人員協助辦理。</p>
		<p>國際健美中心提供網路資訊管理，為實體店面辦理，本中心不會向任何會員要求個人重要資料。</p>
		<p>© 2019-2020 Materialize, All rights reserved. </p>
	</div>
</template>

<script>
export default {
	name: 'TheFixedbottom',
	data:()=>({

	})
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";

#TheFixedbottom{
	width: 100%;
	position: fixed;
	z-index:99;
	left: 0;
	bottom: 0;
	text-align: center;
	color:$main1;
	background-color: $background1;
	padding:0;
	p{
		margin:0;
		font-size:0.9rem;
	}
}

@media (max-width: 747px){
	#TheFixedbottom{
		padding:1rem 0;
		margin-bottom:1rem;
		position: static;
	}
}
</style>
