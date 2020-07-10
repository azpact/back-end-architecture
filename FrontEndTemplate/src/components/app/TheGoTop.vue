<template>
  <div id="TheGoTop">
    <a href="#app" class="btn-floating right">
      <i class="material-icons">publish</i>
      <!-- <i class="material-icons">keyboard_capslock</i> -->
    </a>
  </div>
</template>
<script>
export default {
  name: 'TheGoTop',
  data() {
    return {

    };
  },
  mounted() {
    let gotop = $("#TheGoTop"); //置頂icon
    $(gotop).click(function() {
      $("html, body").animate({ scrollTop: 0 }, 900);
      return false;
    })
  }
};
</script>
<style lang="scss">
@import "@a/style/style.scss";

#TheGoTop {
  z-index: 10;
  position:fixed;
  right:1.5rem;
  bottom:6rem !important;
  a {
    background-color: $warning;
    width:3rem;
    height:3rem;
    line-height:3rem;
  }
  i{
    font-size:2rem;
    margin-top:0.2rem;
  }
  .btn-floating{
   border-radius: 50% 0 50% 50%;
   transition:all 0.5s
  }

  &:hover{
    .btn-floating{
     border-radius: 50% 50% 50% 50%;
   }
  }

}
@media (max-width: 747px){
  #TheGoTop {
    bottom:5.5rem !important;
  }
}
</style>