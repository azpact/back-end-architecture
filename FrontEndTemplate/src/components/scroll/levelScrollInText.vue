<template>
	<div id="levelScrollInText">
		<nativeScroll 
            :class-option="optionSwitch" 
            class="nativeScroll">
        		<span slot="left-switch" class="left-arrow"></span>
        		<span slot="right-switch" class="right-arrow"></span>
            <ul class="item" :style="ulWidth">
                <li v-for="(item,index) in list" :key="index">
                    <a :href="item.href">
                        <img :src="item.imgSrc" :alt="item.name">
                        <p>{{item.name}}</p>
                    </a>
                </li>
            </ul>
		</nativeScroll>
	</div>
</template>

<script>
import nativeScroll from '@c/native/nativeScroll.vue';

export default {
    name: 'levelScrollInText',
    data:function(){
        return{
            ulLength: 180,
            theLength:this.list.length
        }
    },
	computed: {
		optionSwitch(){
			return{
	            autoPlay: true, // 自動撥放
                direction: 2, // 0向下 1向上 2向左 3向右
                switchSingleStep: 180, //單步距離
                limitMoveNum: 0, // 開始無縫滾動的數據量
                step: 3, // 數值越大速度越快
                waitTime: 3500,
                singleWidth: 180,
			}
		},
        ulWidth(){
            return{
                width: `${this.ulLength * this.theLength }px`
            }
        }
	},
	components: {
		nativeScroll
	},
    props:{
        list: {
        type: Array,
          default: () => {
            return []
        }
        },
    },
    mounted(){
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/style.scss";
#levelScrollInText{
    background-color:$color8;
    border:1px solid $color7;
    border-radius:20px 0 20px 20px;
    width: 180px * 5.01; // 顯示寬度
  .nativeScroll {
    // 依照內容設定 width
    background-color:$color8;
    width: 100% ; 
    max-height:175px; // 控制箭頭的垂直位置
    overflow:hidden;
    border-radius:20px 0 20px 20px;
    .left-arrow, .right-arrow {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 40px;
        background-color: $warning;
        cursor: pointer;
            &:hover {
                background-color: $warning3;
            }
            &::before {
                position: absolute;
                content: '';
                width: 16px;
                height: 16px;
                top: 12px;
                left: 15px;
                border: 2px solid $color1;
            }
        }
        .left-arrow{
            left:2.1rem;
            border-radius: 17px 0 0 17px;
        }
        .left-arrow::before {
            border-right: 0;
            border-bottom: 0;
            left:10px;
            transform: rotate(-45deg);
        }
        .right-arrow{
            right:-58rem;
            border-radius: 0 17px 17px 0;
        }
        .right-arrow::before {
            border-left: 0;
            border-top: 0;
            left: 0px;
            transform: rotate(-45deg);
        }
    ul.item {
        z-index:1;
        // width: 180px * 10; //總寬度
            li {
                float: left;
                width: 160px;  // li 或 img 框度
                margin:0 10px;
                text-align: center;
                font-size: 1rem;
                a{
                    display:flex;
                    flex-wrap:wrap;
                    display:block;
                    min-height:100px;
                    img{
                        margin:0 auto;
                        width:160px;
                        height:120px;
                        opacity:0.8;
                    }
                    p{
                        position:relative;
                        top:-1.5rem;
                        background-color:$assit7;
                        color:$color1;
                        font-weight:bold;
                        z-index:2;
                        width:100%;
                        height:2rem;
                        line-height:2rem;
                    }
                }
            }
        }
    }
}
@media (min-width: 1086px) and (max-width: 1236px){
    #levelScrollInText{
        width: 180px * 5.1 ;
        .right-arrow{
            right:-60rem !important;
        }
        .nativeScroll {
            width: 180px * 5 ;
        }
    }
}
@media (min-width: 986px) and (max-width: 1085px){
    #levelScrollInText{
        width: 180px * 4.1 ;
        .right-arrow{
             right:-47.5rem !important;
        }
        .nativeScroll {
            width: 180px * 4 ;
        }
    }
}
@media (min-width: 925px) and (max-width: 985px){
    #levelScrollInText{
        width: 180px * 4.1 ;
        .right-arrow{
             right:-49.5rem !important;
        }
        .nativeScroll {
            width: 180px * 4 ;
        }
    }
}
@media (min-width: 625px) and (max-width: 924px){
    #levelScrollInText{
        width: 180px * 3.1 ;
        .right-arrow{
            right:-36.4rem !important;
        }
        .nativeScroll {
            width: 180px * 3 ;
        }
    }
}

@media (max-width: 624px){
    #levelScrollInText{
        width: 180px * 2.1 ;
        margin-bottom:3rem;
        .left-arrow{
            left:13rem !important;
            &::before {
                left: 16px !important;
            }
        }
        .right-arrow{
            right:-12rem !important;
            padding-left:2rem !important;
            &::before {
                left: 12px !important;
            }
        }
        .left-arrow, .right-arrow {
            font-size:0.5rem !important;
            width:45px !important;
            height:30px !important;
            border-radius: 0 !important;
            top:107px !important;
            &::before {
                position: absolute !important;
                width: 16px !important;
                height: 16px !important;
                top: 8px !important;
            }
        }
        .nativeScroll {
            width: 180px * 2 ;
        }

    }
}
</style>