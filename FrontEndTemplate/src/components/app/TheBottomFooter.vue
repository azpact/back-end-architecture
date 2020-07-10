<template>
	<div id="TheBottomFooter" class="container">
		<div>
			<h3>各地分館</h3>
			<section>
				<h4>北區</h4>
				<a href="#!">信義館-健美諮詢</a>
				<a href="#!">台北館-健美中心</a>
				<a href="#!">大安館-健美中心</a>
				<a href="#!">林口館-健美中心</a>
			</section>
			<section>
				<h4>中區</h4>
				<a href="#!">桃園館-健美中心</a>
				<a href="#!">新竹館(總店)-健美中心</a>
				<a href="#!">新竹館(中華路二段)-健美中心</a>
				<a href="#!">台中館-健美中心</a>
			</section>
			<section>
				<h4>南區</h4>
				<a href="#!">台南館-健美中心</a>
				<a href="#!">高雄館(總店)-健美中心</a>
				<a href="#!">高雄館(中正三路)-健美中心</a>
			</section>
			<section>
				<h4>其他城市</h4>
				<a href="#!">上海市(浦東)-健美中心</a>
				<a href="#!">上海市(靜安)-健美中心</a>
				<a href="#!">北京市(北京)-健美中心</a>
			</section>
		</div>
		<div>
			<section>
				<h3>聯絡我們</h3>
				<h4>線上客服時間:</h4>
				<span>周一至周五 10:00-20:00</span>
				<h4>免付費客服專線:</h4>
				<span>0800-666-666</span>

				<h4>即時聯絡我們:</h4>
				<span>Email: World5336gym@gmail.com</span>
				<span>Line: 搜尋@gym5336</span>
			</section>
			<section>
				<h3>更多分享</h3>
					<img :src="imgOne" alt="">
					<img :src="imgTwo" alt="">
			</section>
		</div>
	</div>
</template>

<script>
import imgOne from "@a/img/icon/mail.png"
import imgTwo from "@a/img/icon/facebook.png"

export default {
	name: 'TheBottomFooter',
	data:()=>({
		imgOne:imgOne,
		imgTwo:imgTwo
	})
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#TheBottomFooter{
	display:flex;
	justify-content:space-around;
	flex-wrap:wrap;
	padding-left:3rem;
	img{
		width:40px;
		height:40px;
	}
	h3{
		border-bottom:2px solid $color6;
		margin-left:0;
		margin-right:6rem;
		font-size:0.9rem;
	}
	h4,a{
		margin:0;
		font-size:1rem;
	}
	h4{
		background-color:$main1;
		color:$color1;
		display:inline-block;
		padding:0.2rem 0.5rem;
		border-radius:10px 0 10px 10px;
		margin-bottom:0.5rem;
	}
	span{
		display:block;
		width:100%;
	}
	&>div:nth-of-type(1){
		width:33.3%;
		section{
			width:230px;
		}
		a{
			display:block;
			width:100%;
			padding-left:2rem;
			color:$main1;
			&:hover{
				text-decoration:underline;
			}
		}
	}
	&>div:nth-of-type(2){
		display:flex;
		justify-content:space-between;
		width:66.6%;
		span{
			padding:0.25rem 0.5rem;
		}
		section{
			width:100%;
		}
	}
}
@media (max-width: 747px){
	#TheBottomFooter{
		width:100%;
		margin-left:-2rem;
		&>div:nth-of-type(1){
			width:100%;
			display:flex;
			flex-wrap:wrap;
			h3{
				width:100%;
			}
			section{
				width:50%;
			}
		}
		&>div:nth-of-type(2){
			width:100%;
		}
	}
}
</style>
