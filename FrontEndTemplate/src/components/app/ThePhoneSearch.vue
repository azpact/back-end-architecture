<template>
	<div id="ThePhoneSearch">
		<section>
			<div class="input-field">
				<label for="search">輸入搜尋關鍵字</label>
				<input id="search" type="text" >
				<a href="#!">
					<i class="material-icons">search</i>
				</a>
			</div>
			<div class="icon">
				<transition
				enter-active-class="line-enter-active"
				leave-active-class="line-leave-active"
				>
				<a href="#!" v-if="!isScrollShow" class="btn-floating pulse">
					<img :src="img" alt="line">
				</a>
				</transition>
			</div>
		</section>
</div>
</template>

<script>
import img from "@a/img/line.svg"

export default {
	name: 'ThePhoneSearch',
	data:()=>({
		img:img,
		isScrollShow:false,
	}),
	created(){
		window.addEventListener('scroll',this.fScroll,true);
	},
	beforeDestroy(){
		window.removeEventListener('scroll', this.fScroll,true);
	},
	methods:{
		fScroll(){
			let scrollTop = document.documentElement.scrollTop;
			if(scrollTop < 42){
				this.isScrollShow = false
			}else{
				this.isScrollShow = true
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#ThePhoneSearch{
	padding-top:0.5rem;
	&>section{
		display:flex;
		justify-content:center;
	}
	div.input-field{
		display:flex;
		input#search{
			background-color: $color1;
			border: 1px solid $assit1;
			margin: 0;
			margin-top: 0rem;
			height: 2rem;
			border-radius: 60px;
			text-indent: 0.5rem;
			max-height: 29.6px;
			font-family:"微軟正黑體"
		}
		input#search[type="text"]:not(.brower-default):focus:not([readonly]) + label{
			color: #333;
			margin-left: 0rem;
			margin-top: -1.3rem;
		}
		label{
			top: -0.2rem;
			margin-left: 0.5rem;
		}
		label:not(.label-icon).active {
		-webkit-transform:translateY(2.3rem) scale(0.8);
		transform:translateY(2.3rem) scale(0.8);
		-webkit-transform-origin:0 0;
		transform-origin:0 0
		}
		label:not(.label-icon).active{
		top: 0rem;
		}
		a{
			margin-top:1rem;
			background-color:$assit2;
			color:$color1;
			border-radius: 60px;
			width: 40px;
			height: 29px;
			text-align: center;
			transition: all .2s;
			position: absolute;
			top:-14px;
			right: 2px;
			&:hover{
			background-color:$color1;
			color: $assit2;
		}
			i{
				width: 32px;
				height: 29px;
				line-height: 38px;
			}
		}
	}
	div.icon{
		display:flex;
		align-items:center;
		margin-left:1rem;
		a{
			&.btn-floating{
				background-color: $background1;
				box-shadow: none;
			}
			&.pulse::before{
				background-color: $success2;
			}
		}
	}
}
@media (max-width: 747px){
#ThePhoneSearch{
	margin-top:-0.2rem;
	background-color:$color1;
	&>section{
		display:flex;
	}
	input#search{
		z-index:1;
		min-width:260px;
		background-color:rgba(255,255,255,0) !important;
	}
	label{
		margin-top:-0.4rem;
		margin-left:1rem;
	}
	label:not(.label-icon).active {
		-webkit-transform:translateY(2.6rem) scale(0.8) !important;
		transform:translateY(2.6rem) scale(0.8) !important;
	}
	div.input-field{
		a{
			display:block;
			z-index:5;
		}
	}
}
}
</style>
