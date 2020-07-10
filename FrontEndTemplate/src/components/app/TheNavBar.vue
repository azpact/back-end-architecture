<template>
	<div id="TheNavBar">
		<div class="one">
			<section class="row">
				<div >
					<img :src="img" alt="">
				</div>
				<div>
					<ul class="drop-down-menu">
						<li><a class="waves-effect waves-light" href="#!">最新消息</a></li>
						<li>
							<a href="#!" class="waves-effect waves-light">館院資訊
								<span>▼</span>
							</a>
							<div>
								<section>
									<h3>北區</h3>
									<a href="#!">信義館-健美諮詢</a>
									<a href="#!">台北館-健美中心</a>
									<a href="#!">大安館-健美中心</a>
									<a href="#!">林口館-健美中心</a>
								</section>
								<section>
									<h3>中區</h3>
									<a href="#!">桃園館-健美中心</a>
									<a href="#!">新竹館(總店)-健美中心</a>
									<a href="#!">新竹館(中華路二段)-健美中心</a>
									<a href="#!">台中館-健美中心</a>
								</section>
								<section>
									<h3>南區</h3>
									<a href="#!">台南館-健美中心</a>
									<a href="#!">高雄館(總店)-健美中心</a>
									<a href="#!">高雄館(中正三路)-健美中心</a>
								</section>
								<section>
									<h3>其他城市</h3>
									<a href="#!">上海市(浦東)-健美中心</a>
									<a href="#!">上海市(靜安)-健美中心</a>
									<a href="#!">北京市(北京)-健美中心</a>
								</section>
							</div>
						</li>
						<li><a href="#!" class="waves-effect waves-light">專業教練</a></li>
						<li><a href="#!" class="waves-effect waves-light">服務項目<span>▼</span></a>
							<div class="m-one">
								<section>
									<h3>飲食諮詢</h3>
									<a href="#!">養生療法</a>
									<a href="#!">健康食品</a>
									<a href="#!">飲食調整</a>
								</section>
								<section>
									<h3>體質諮詢</h3>
									<a href="#!">體脂檢測</a>
									<a href="#!">規劃生活作息</a>
								</section>
								<section>
									<h3>健身諮詢</h3>
									<a href="#!">健身電話諮詢</a>
									<a href="#!">100 日健身計畫</a>
									<a href="#!">預約健身場地</a>
								</section>
								<section>
									<h3>器材諮詢</h3>
									<a href="#!">申購器材</a>
									<a href="#!">適用器材</a>
								</section>
							</div>
						</li>
						<li><a href="#!" class="waves-effect waves-light">健身分享</a></li>
						<li><a href="#!" class="waves-effect waves-light">其他服務
							<span>▼</span></a>
							<div>
								<a href="#!">線上諮詢</a>
								<a href="#!">常見問題</a>
							</div>
						</li>
						<li><a href="#!" class="waves-effect waves-light">諮詢問答</a></li>
						<li><a href="#!" class="waves-effect waves-light">線上預約</a></li>
						<li><a href="#!" class="waves-effect waves-light">會員專區</a></li>
					</ul>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import img from "@a/img/logo.png"

export default {
	name: 'TheNavBar',
	data:()=>({
		img:img
})
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#TheNavBar{
	margin-top:4.4rem;
	background-color:$color1;
	img {
		max-width: 100%;
		height: auto;
	}
	.one{
		display: flex;
		width:98%;
		height:5.5rem;
		&>section{
			display: flex;
			align-items: flex-end;
			flex-wrap: wrap;
			&>div:nth-of-type(1){
				width:20%;
				img{
					width:12rem;
				}
			}
			&>div:nth-of-type(2){
				width:80%;
			}
		}
		ul{
		display: inline-block !important; /* 重點 */
		}
		ul.drop-down-menu{
			width:100%;
			margin-left: 1rem;
			&>li{
				float: left; /* 重點 只有第一個靠左 */
			}
			&>li:last-child{
				border-right-style: none;
			}
			div.m-one{
				section{
					h3{
						color: $color1;
					}
				}
				section:nth-of-type(1){
					background-color: $assit2;
					h3{
						background-color: $assit2;
					}
				}
				section:nth-of-type(2){
					background-color: $success1;
					h3{
						background-color: $success1;
					}
				}
				section:nth-of-type(3){
					background-color: $warning;
					h3{
						background-color: $warning;
					}
				}
				section:nth-of-type(4){
					background-color: $main1;
					h3{
						background-color: $main1;
					}
				}
			}

			li{
				z-index: inherit;
				position: relative; /* 重點 */
				white-space: nowrap;
				&:hover{
				a{
				background-color: $assit3;
				color: $color1;
			}
			ul{
				opacity: 1;
				-webkit-transition: opacity 0.3s;
				transition: opacity 0.3s;
				left: -1px;
				border-right: 5px;
			}
			div{
				opacity: 1;
				-webkit-transition: opacity 0.3s;
				transition: opacity 0.3s;
				left: -1px;
				border-right: 5px;
				h3{
				margin: 0;
				padding:0.1rem;
				height:2.2rem;
				line-height:2.2rem;
				font-size: 1rem;
				background-color: $main1;
				color:$color1;
				font-weight: bold;
			}
			a{
				display: block;
				border-right: 2px solid $color1;
				height: 2.2rem;
				line-height: 2.2rem;
				background-color: $color1;
				color: $main1;
				margin-left:0.2rem;
				&:hover{
				background-color: $assit3;
				color: $color1;
				border-bottom: 2px solid $main1;
			}
		}

		section{
			display: flex;
			align-items: center;
			height: 2rem;
			line-height: 2rem;
			margin-bottom: 0.3rem;
		}
	}
	}
}
a{
	background-color: $color1;
	color: $main1;
	display: block;
	padding: 0 0.5rem;
	line-height: 40px;
	&:hover{
	background-color: $assit1;
	color: $color1;
}
}
	// 自訂第二層樣式
	li div{
		border:2px solid $assit4 !important;
		background-color:$color1;
		border-radius:20px 0 20px 20px;
	}
	li:nth-of-type(2):hover div{
		left: -5rem;
	}
	li:nth-of-type(4):hover div{
		left: -17rem;
	}
	li:nth-of-type(6):hover div{
		left: -28rem;
	}
div{
	z-index: 99;
	position: absolute;  /* 重點 */
	left: -1px;
	top: 100%;
	left: -2222px;
	opacity: 0;
	-webkit-transition: opacity 0.3s;
	transition: opacity 0.3s;
	padding: 1.25rem 0.75rem;
	min-width: 750px;
	background-color:$assit5;
}
}
}
}
@media (min-width: 1377px) and (max-width: 1493px){
#TheNavBar{
div.one{
		height:16rem;
	}
}
}
@media (min-width: 793px) and (max-width: 1377px){
#TheNavBar{
div.one{
	height:15.5rem;
	}
}
}
@media (min-width: 747px) and (max-width: 792px){
#TheNavBar{
div.one{
	height:11rem;
	}
}
}
@media (min-width: 747px) and (max-width: 1493px){
#TheNavBar{
	body{
		overflow-x: hidden;
	}
	div.one{
		section{
			display:flex;
			flex-wrap:wrap;
			&>div:nth-of-type(1){
				width:100% !important;
				display:flex;
				justify-content:center;
				img{
					width:30% !important;
				}
			}
			&>div:nth-of-type(2){
				width:100%;
				ul.drop-down-menu{
				display:flex !important;
				justify-content:center;
					li{
						div{
							min-width: 700px;
						}
					}
				}
				
			}
		}
	}
}
}
@media (max-width: 747px){
body{
	/* background-color:orange; */
	overflow-x: hidden
}
#TheNavBar{
	display:none;
}

}
</style>
