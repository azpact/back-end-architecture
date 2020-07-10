<template>
	<div id="toolScrollTop" ref="the">
		<p>scrollTop:{{scrollTop}}</p>
		<p>bodyWidth:{{bodyWidth}} (+15)</p>
		<p>bodyHeight:{{bodyHeight}}</p>
	</div>
</template>

<script>
export default {
	name: 'toolScrollTop',
	data:()=>({
		scrollTop:null,
		bodyWidth:document.documentElement.clientWidth + 15,
		bodyHeight:document.documentElement.clientHeight,
	}),
	created(){
		window.addEventListener('scroll',this.fScroll,true);
		window.addEventListener('resize',this.fBodyWidth,true);
		window.addEventListener('resize',this.fBodyHeight,true);
	},
	beforeDestroy(){
		window.removeEventListener('scroll', this.fScroll,true);
		window.removeEventListener('resize',this.fBodyWidth,true);
		window.removeEventListener('resize',this.fBodyHeight,true);
	},
	methods:{
		fScroll(){
			let scrollTop = document.documentElement.scrollTop;
			this.scrollTop = scrollTop
		},
		fBodyWidth(){
			this.bodyWidth  = document.documentElement.clientWidth + 15;
		},
		fBodyHeight(){
			this.bodyHeight = document.documentElement.clientHeight
		}
	},
	mounted(){
		//
    }
};
</script>

<style lang="scss" scoped>
#toolScrollTop{
	z-index:999;
	position:fixed;
	top:0;
	left:0;
	padding:0.2rem 0.5rem;;
	text-align:center;
	background-color:#FFF;
	p{
		width:7.5rem;
	}
}
</style>
