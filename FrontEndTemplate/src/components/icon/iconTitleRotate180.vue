<template>
	<div id="iconTitleRotate180">
		<nativeIcon :icon="iconList"></nativeIcon>
	</div>
</template>

<script>
const nativeIcon = () => import("@c/native/nativeIcon.vue")
export default {
  name: 'iconTitleRotate180',
  data:()=>({
  	iconList:[{name:"",icon:""}]
  }),
  components:{
  	nativeIcon
  },
  props:{
  	name: {
  		type: String,
  		default: '首頁'
  	},
  	icon: {
  		type: String,
  		default: 'home'
  	},
  },
  mounted(){
  	this.iconList[0].name = this.name
  	this.iconList[0].icon = this.icon
  }
};
</script>

<style lang="scss">
@import "@/assets/style/style.scss";

#iconTitleRotate180{
	#nativeIcon{
		display:inline-block;
		display:flex;
		align-items:center;
		color: $assit7;
		i{
			height:2rem;
			line-height:2rem;
			border:1px solid $assit7;
			border-radius:50%;
			width:26px;
			height:26px;
			text-align:center;
			display:block;
			transform: rotate(180deg);
		}
		p{
			font-size:1.3rem;
			font-weight:bold;
			padding:0.2rem 0.5rem;
			margin:0;
		}
	}
}
</style>
