<template>
	<div id="levelScrollOut">
		<nativeScroll :data='userImage' :class-option="optionCustomer">
			<span slot="left-switch" class="left-arrow"></span>
        	<span slot="right-switch" class="right-arrow"></span>
			<ul class="userImageAllWrapper">
				<li v-for="item in userImage" :key="item.index" style=
				"width:500px;">
					<img :src="item.src" alt="">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</nativeScroll>
		<nativeScroll :class-option="optionSwitch" class="nativeScroll">
        		<span slot="left-switch" class="left-arrow"></span>
        		<span slot="right-switch" class="right-arrow"></span>
        <ul class="item">
            <li v-for="item in listData">{{item}}</li>
        </ul>
		</nativeScroll>
	</div>
</template>

<script>
// import vueSeamless from 'vue-seamless-scroll';
import nativeScroll from '@c/native/nativeScroll.vue';

import imgOne from "@a/img/landspace/running-water1.gif"
import imgTwo from "@a/img/landspace/running-water2.gif"
import imgThree from "@a/img/landspace/running-water3.gif"
import imgFour from "@a/img/landspace/running-water4.gif"
import imgFive from "@a/img/landspace/running-water5.gif"

export default {
    name: 'levelScrollOut',
	data:()=>({
		optionCustomer: {
	
		},
		listData: [1, 2, 3, 4, 5, 6, 7, 8],
		userImage: [
			{name:'1',src:imgOne},
			{name:'2',src:imgTwo},
			{name:'3',src:imgThree},
			{name:'4',src:imgFour},
			{name:'5',src:imgFive},
		]
	}),
	computed: {
		optionSwitch(){
			return{
	            autoPlay: true, // 自動撥放
                direction: 2, // 0向下 1向上 2向左 3向右
                switchSingleStep: 140, //單步距離
                limitMoveNum: 0, // 開始無縫滾動的數據量
                step: 1, // 數值越大速度越快
                waitTime: 1000,
                singleWidth: 140,
			}
		}
	},
	components: {
		nativeScroll
	}
};
</script>

<style lang="scss" scoped>
.userImage {
        overflow:hidden;
        .userImageAllWrapper {
          width:1160px;
          height:23rem;
          list-style:none;
          display:flex;
          &:last-child {
           
          }
          li {
            // border: 1px solid #111;
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            img {
              width:15rem;
            }
            span{
            	font-size:1.5rem;
            	text-align:center;
            	width:100%;
            	height:3rem;
            	line-height:3rem;
        	}
          }
        }
      }


.nativeScroll {
        overflow: hidden;
        height: 140px;
        width: 140px * 4;
        margin: 0 auto;
        .left-arrow, .right-arrow {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #00a0e9;
            cursor: pointer;
            &:hover {
                background-color: #0f39fa;
            }
            &::before {
                position: absolute;
                content: '';
                width: 16px;
                height: 16px;
                top: 12px;
                left: 15px;
                border: 2px solid #fff;
            }
        }
        .left-arrow::before {
            border-right: 0;
            border-bottom: 0;
            transform: rotate(-45deg);
        }
        .right-arrow::before {
            border-left: 0;
            border-top: 0;
            left: 9px;
            transform: rotate(-45deg);
        }
        ul.item {
            width: 140px * 8;
            li {
                float: left;
                width: 120px;
                height: 120px;
                margin: 10px;
                line-height: 120px;
                background-color: #999;
                color: #fff;
                text-align: center;
                font-size: 30px;
            }
        }
    }

</style>