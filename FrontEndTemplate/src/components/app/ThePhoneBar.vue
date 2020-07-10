<template>
	<div id="ThePhoneBar">
		<div class="one">
			<section class="row">
				<div class="col s2">
					<i class="material-icons" @click="fMenu(1)">menu</i>
				</div>
				<div class="col s8">
					<img :src="img" alt="logo">
				</div>
				<div class="col s2">
					<i class="material-icons" @click="fMenu(2)">search</i>
					<i class="material-icons" @click="fMenu(3)">home</i>
				</div>
			</section>
			<section>
				<transition
				enter-active-class="open-enter-active"
				leave-active-class="open-leave-active"
				>
				<div v-if="isOpen" class="open">
					<ThePhoneKeyWrod></ThePhoneKeyWrod>
					<transition
					enter-active-class="search-enter-active"
					leave-active-class="search-leave-active"
					>
					<div v-if="isSearch" class="search">
						<ThePhoneSearch></ThePhoneSearch>
					</div>
				</transition>

				<transition
				enter-active-class="menu-enter-active"
				leave-active-class="menu-leave-active"
				>
				<div v-if="isMenu" class="menu">
					<ThePhoneNavBar></ThePhoneNavBar>
				</div>
			</transition>
		</div>
	</transition>
</section>

</div>
</div>
</template>

<script>
const ThePhoneKeyWrod = () => import("@c/app/ThePhoneKeyWrod.vue")
const ThePhoneSearch = () => import("@c/app/ThePhoneSearch.vue")
const ThePhoneNavBar = () => import("@c/app/ThePhoneNavBar.vue")

import img from "@a/img/logo.png"

export default {
	name: 'ThePhoneBar',
	data:()=>({
		img:img,
		isMenu:false,
		isSearch:false,
		isOpen:false,
	}),
	components:{
		ThePhoneKeyWrod,
		ThePhoneSearch,
		ThePhoneNavBar
	},
	methods:{  
		fMenu(type){
			switch (type) {
				case 1:
				if(!this.isOpen && !this.isMenu){
					this.isOpen = true
					this.isMenu = true
				}else if(!this.isMenu){
					this.isMenu = true
				}else if(this.isSearch){
					this.isMenu = false
				}else{
					this.isMenu = false
					this.isOpen = false
				}
				break;
				case 2:
				if(!this.isOpen && !this.isSearch){
					this.isOpen = true
					this.isSearch = true
				}else if(!this.isSearch){
					this.isSearch = true
				}else if(this.isMenu){
					this.isSearch = false
				}else{
					this.isSearch = false
					this.isOpen = false
				}
				break;
				case 3:
				console.log('home')
				break;
				case 4:
				this.isOpen = false
				this.isSearch = false
				this.isMenu = false
				break;
				default:
				break;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#ThePhoneBar{
	.one{
	display:none;
}
}
@media (max-width: 747px){
#ThePhoneBar{
	.one{
			z-index:99;
			display: flex;
			flex-wrap: wrap;
			position:fixed;
			width:100%;
			background-color:$color1;
			height:3.5rem;
		}
		.one i{
			cursor: pointer;
		}
		.one img{
			max-width: 100%;
			height: auto;
		}
		.one section{
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
		}
		.one>section:nth-of-type(1){
			background-color: $color1;
			z-index: 20;
			padding: 0.25rem;
			border-bottom: 2px solid $color3;
		}
		.one>section:nth-of-type(1) div{
			display: flex;
			justify-content: center;
		}
		.one>section:nth-of-type(1)>div:nth-of-type(2) img{
			max-height: 3rem;
		}
		.one>section:nth-of-type(1)>div:nth-of-type(3){
			display: flex;
		}
		.one>section:nth-of-type(1)>div:nth-of-type(3) i{
			margin-right: 1rem;
		}
		.one>section:nth-of-type(2) div{
			width: 100%;
		}
		.one>section:nth-of-type(2) .open{
			z-index: 10;
			position: absolute;
			top: 3.7rem;
		}
		
		.one>section:nth-of-type(2) .menu{
			
		}
		.one>section:nth-of-type(2) .search{
			
		}
		.one .material-icons{
			margin-top:0.5rem;
			font-size: 2rem
		}
		.open-enter-active {
			animation: goOpen .5s;
		}
		.open-leave-active {
			animation: backOpen .3s;
		}
		.menu-enter-active {
			animation: goMenu .5s;
		}
		.menu-leave-active {
			animation: backMenu .3s;
		}
		.search-enter-active {
			animation: goSearch .5s;
		}
		.search-leave-active {
			animation: backSearch .3s;
		}
		@keyframes goOpen {
			0% {
				opacity: 0;
				transform:translateY(-5rem);
			}
			100% {
				opacity: 1;
				transform:translateY(0rem);
			}
		}
		@keyframes backOpen {
			0% {
				opacity: 1;
				transform:translateY(0rem);
			}
			100% {
				opacity: 0;
				transform:translateY(-30rem);
			}
		} 

		@keyframes goMenu {
			0% {
				opacity: 0;
				transform:translateY(-5rem);
				transform-origin: 0 0;
				transform: scale(0);
			}
			100% {
				opacity: 1;
				transform:translateY(0rem);
				transform-origin:0 0;
				transform: scale(1);
			}
		}
		@keyframes backMenu {
			0% {
				opacity: 1;
				transform:translateY(0rem);
			}
			100% {
				opacity: 0;
				transform:translateY(-30rem);
			}
		} 

		@keyframes goSearch {
			0% {
				opacity: 0;
				transform:translateY(-5rem);
				transform-origin: 100% 0;
				transform: scale(0);
			}
			100% {
				opacity: 1;
				transform:translateY(-5rem);
				transform-origin: 100% 0;
				transform: scale(1);
			}
		}
		@keyframes backSearch {
			0% {
				opacity: 1;
				transform:translateY(0);
			}
			100% {
				opacity: 0;
				transform:translateY(-30rem);
			}
		} 

	}
}
</style>
