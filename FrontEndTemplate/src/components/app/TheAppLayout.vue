<template>
  <div id="TheAppLayout">
    <!-- <header>
      <TheHeader>
        <template v-slot:keywordbar>
         <ThePhoneKeyWrodBar></ThePhoneKeyWrodBar>
       </template>
       <template v-slot:navbar>
         <TheNavBar></TheNavBar>
       </template>
       <template v-slot:phonenavbar>
         <ThePhoneBar></ThePhoneBar>
       </template>
       <template v-slot:sidebar>
          <TheSideBox></TheSideBox>
       </template>
     </TheHeader>
   </header> -->
   <main>
    <router-view></router-view>
  </main>
  <!-- <footer>
    <TheFooter>
      <template v-slot:bottomfooter>
        <TheBottomFooter></TheBottomFooter>
      </template>
      <template v-slot:fixedbottom>
        <TheFixedbottom></TheFixedbottom>
      </template>
      <template v-slot:phonebottomnav>
        <ThePhoneBottomNav></ThePhoneBottomNav>
      </template>
    </TheFooter>
  </footer> -->

</div>
</template>
<script>
const TheHeader = () => import("@c/app/TheHeader.vue");
const TheFooter = () => import("@c/app/TheFooter.vue");
const ThePhoneKeyWrodBar = () => import("@c/app/ThePhoneKeyWrodBar.vue");
const TheNavBar = () => import("@c/app/TheNavBar.vue");
const TheSideBox = () => import("@c/app/TheSideBox.vue");
const ThePhoneBar = () => import("@c/app/ThePhoneBar.vue");
const ThePhoneBottomNav = () => import("@c/app/ThePhoneBottomNav.vue");
const TheBottomFooter = () => import("@c/app/TheBottomFooter.vue");
const TheFixedbottom = () => import("@c/app/TheFixedbottom.vue");
const sideNavBox = () => import("@c/box/sideNavBox.vue")

export default {
  name: 'TheAppLayout',
  data:()=>({
    //
  }),
  components: {
    TheHeader,
    TheFooter,
    ThePhoneKeyWrodBar,
    TheNavBar,
    TheSideBox,
    ThePhoneBar,
    ThePhoneBottomNav,
    TheBottomFooter,
    TheFixedbottom
  },
  mounted() {

  }
};
</script>
<style lang="scss">
@import "@a/style/style.scss";
main{
  padding-top:1rem;
}
@media (max-width: 747px){
  main{
    padding-top:4rem;
  }
}
</style>