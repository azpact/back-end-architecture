<template>
	<div id="verticalScrollText">
		<nativeScroll :class-option="optionSwitch" class="seamless-warp">
            <slot></slot>  
		</nativeScroll>
	</div>
</template>

<script>
import nativeScroll from '@c/native/nativeScroll.vue';

export default {
    name: 'verticalScrollText',
	data:()=>({
		//
	}),
    components: {
        nativeScroll
    },
	computed: {
		optionSwitch(){
			return{
	            autoPlay: true, // 自動撥放
                direction: 1, // 0向下 1向上 2向左 3向右
                limitMoveNum: 0, // 開始無縫滾動的數據量
                step: 1, // 數值越大速度越快
                waitTime: 3500,
                singleHeight:34

			}
		}
	},
};
</script>

<style lang="scss">

#verticalScrollText{

.seamless-warp{
    height:100%; //視窗高度
    max-height:32*5px;
    overflow: hidden;
   p{
       margin:0;
       padding:0;
       font-size:14px;
       height:32px;
    }
    div{
        div{
            border-top:2px solid #ddd;
            height:32*8; //步進總高度
        }
    }
}
}


</style>