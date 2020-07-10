<template>
	<div id="nativeControls">
      <div 
      class="carousel-wrap" 
      ref="carousel" 
      data-auto="false" 
      data-delay="3500" 
      data-arrows="true" 
      data-dots="true"
      @mouseenter.stop="toggleTimer = false" 
      @mouseleave.stop="toggleTimer = true" 
      @touchstart.stop="touchStart" 
      @touchmove.stop="touchMove" 
      :style="'min-height:' + minHeight ">
      <!-- image -->
        <transition :name="carouselName">
          <div 
            class="item" 
            v-for="(item, index) in data" 
            v-if="show == index" 
            :key="index">
            <a :href="item.href">
              <img :src="item.src"/>
            </a>
          </div>
        </transition>
      <!-- arrows -->
      <div class="arrows-group" v-if="arrows">
        <a class="button-prev" href="#" @click.prevent="toPrev" @mouseover.prevent="toPrev">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-back-outline.png"/>
        </a>
        <a class="button-next" href="#" @click.prevent="toNext" @mouseover.prevent="toNext">
          <img src="//akveo.github.io/eva-icons/outline/png/128/arrow-ios-forward-outline.png"/>
        </a>
      </div>
      <!-- bottom -->
      <div class="dot-group" v-if="dots">
        <a v-for="(l, i) in data" href="#" :class="{ 'active': show == i }" @mouseover.prevent="touchShow(i)">{{l.text}}
        </a>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'nativeControls',
  data:()=>({
  	  carouselName:"carousel-next",
      len:0,
      show:0,
      xDown:null,
      yDown:null,
      autoplay:!1,
      timer:null,
      timerDelay:3e3,
      toggleTimer:!0,
      minHeight:0,
      arrows:!0,
      dots:!0
  }),
  props: {
      data: {
        type: Array,
        default: () => {
          return []
        }
      },
      classOption: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
  methods:{
  	  toNext(){
        this.carouselName="carousel-next",
        this.show+1>=this.len?this.show=0:this.show=this.show+1
      },
      toPrev(){
        this.carouselName="carousel-prev",
        this.show-1<0?this.show=this.len-1:this.show=this.show-1
      },
      touchShow(i){
        let newIndex = i+1
        let oldIndex = this.show +1
        if(newIndex>oldIndex){
          this.carouselName="carousel-next"
        }else{
          this.carouselName="carousel-prev"
        }
        this.show = i
      },
      touchStart(t){
        this.xDown=t.touches[0].clientX,
        this.yDown=t.touches[0].clientY
      },
      touchMove(t){
        if(this.xDown&&this.yDown){
          var s=t.touches[0].clientX,e=t.touches[0].clientY,
          o=this.xDown-s,i=this.yDown-e;Math.abs(o)>Math.abs(i)&&(o>0?this.toNext():this.toPrev()),
          this.xDown=null,this.yDown=null
        }
      },
      autoPlay:function(){
        var t=this;setInterval(function(){
          t.toggleTimer&&t.toNext()
        },
        this.timerDelay)
      }
  },
   computed:{

  },
  	mounted(){
  		let t = this;
      this.len = this.data.length;
      let s = this.$refs.carousel.dataset;
      this.autoplay = "true" == s.auto,
      this.timerDelay = Number(s.delay)||3e3,
      this.arrows = "true" == s.arrows,
      this.dots = "true" == s.dots,
      this.autoplay&&this.autoPlay(),
      window.addEventListener("load",function(){
        t.minHeight=t.$refs.carousel.offsetHeight+"px"})
      }
};
</script>

<style lang="scss" scoped>

*, *::before, *::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

#nativeControls{
 	  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
}

// 原生樣式
.carousel-wrap .item{
  position:absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  display:-webkit-box;
  display:flex;
  -webkit-box-pack:center;
  justify-content:center;
  -webkit-box-align:center;
  align-items:center;
  width:100%;
  opacity:1;
}
.carousel-wrap .item:first-of-type{
  position:relative
}
.carousel-wrap .item img{
  display:block;
  max-width:100%
}
.carousel-wrap .item a{
  display:block
}
.carousel-wrap .button-prev,
.carousel-wrap .button-next,
.carousel-wrap .dot-group{
  position:absolute;
  z-index:1
}
.carousel-wrap .button-prev,
.carousel-wrap .button-next{
  top:50%;
  -webkit-transform:translateY(-50%);
  transform:translateY(-50%);
  -webkit-transition:opacity .3s;
  transition:opacity .3s
}
.carousel-wrap .button-prev:hover,
.carousel-wrap .button-next:hover{
  opacity:.7
}
.carousel-wrap .button-prev img,
.carousel-wrap .button-next img{
  display:block;
  max-width:50px
}
.carousel-wrap .button-next{
  right:0
}
.carousel-wrap .dot-group{
  right:0;
  bottom:8px;
  left:0;
  display:-webkit-box;
  display:flex;
  -webkit-box-pack:center;
  justify-content:center
}
.carousel-wrap .dot-group a{
  display:block;
  margin-right:8px;
  margin-left:8px;
  width:16px;
  height:16px;
  background:rgba(255,255,255,0.5);
  border:2px solid rgba(255,255,255,0.5);
  border-radius:50%;
  -webkit-transition:.3s;
  transition:.3s
}
.carousel-wrap .dot-group a:hover,
.carousel-wrap .dot-group a.active{
  background:#FFF;
}
.carousel-prev-enter-active,
.carousel-prev-leave-active,
.carousel-next-enter-active,
.carousel-next-leave-active{
  -webkit-transition:-webkit-transform 1s ease;
  transition:-webkit-transform 1s ease;
  transition:transform 1s ease;
  transition:transform 1s ease, 
  -webkit-transform 1s ease;
  will-change:transform;
}
.carousel-next-enter,
.carousel-prev-leave-to{
  -webkit-transform:translateX(100%);
  transform:translateX(100%)
}
.carousel-next-leave-to,
.carousel-prev-enter{
  -webkit-transform:translateX(-100%);
  transform:translateX(-100%)
}

.sidebar-enter-active {
  animation: goSidebar .5s;
}
.sidebar-leave-active {
  animation: backSidebar .3s;
}
@keyframes goSidebar {
  from {
    left: -500px;
  }
  to {
    left: 0px;
  }
}
@keyframes backSidebar {
  from {
    left: 0px;
  }
  to {
    left: -500px;
  }
}
</style>
