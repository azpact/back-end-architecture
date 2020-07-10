<template>
	<div id="controls990m520">
    <nativeControls :data="list"></nativeControls>
  </div>
</template>

<script>
const nativeControls = () => import("@c/native/nativeControls.vue")

export default {
  name: 'controls990m520',
  data:()=>({
    //
  }),
  components:{
  	nativeControls
  },
  props:{
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
  }
};
</script>

<style lang="scss">
@import "@/assets/style/style.scss";


// 原生樣式
#nativeControls{
  .dot-group{
    a{
      background-color: $color6;
      width: 140px;
          height: 60px;
          border-radius: 2px;
          border: none;
          color: $color1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          font-size: 1rem;
          font-weight: bold;
    }
    a.active{
          background-color:$assit7;
      }
  }
  .carousel-wrap{
      max-width:990px; //最大寬度
      position:relative;
      width:100%;
      overflow:hidden;
      border:2px solid rgba(255,255,255,0.1);
      box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23)
  }
  .item{
    border:none;
    margin:0;
    padding:0;
    img{
    // 調整整體寬度與高度
      min-width:990px;
      min-height:520px;
    }
  }
  // 修改箭頭
  .arrows-group{
    display:none;  // 顯示與隱藏按鈕
    
  }
  .carousel-wrap .button-prev,
  .carousel-wrap .button-next{
      opacity:.7;
  }    
  .carousel-wrap .button-prev:hover,
  .carousel-wrap .button-next:hover{
      opacity:1;
  }
}

@media (max-width: 747px){
  #nativeControls{
    .item{
      border:none;
      margin:0;
      padding:0;
      img{
      // 調整整體寬度與高度
        min-width:247px;
        min-height:130px;
      }
    }
  }
}
</style>
