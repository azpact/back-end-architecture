<template>
  <div id="app" v-cloak :style="{backgroundImage:'url(' + img + ')'}">
    <TheAppLayout></TheAppLayout>
    <TheGoTop></TheGoTop>
  </div>
</template>
<script>
const TheAppLayout = () => import("@c/app/TheAppLayout.vue")
const TheGoTop = () => import("@c/app/TheGoTop.vue")
import logo from "@a/img/logo.ico";
import img from "@a/img/background.svg";
// import ws from "@/utils/mixin/ws.js"

export default {
  name: 'App',
  metaInfo: {
    meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
    ],
    link: [
    { rel: 'shortcut icon', href: logo, type: 'image/x-icon' }

    ]
  },
  // mixins: [ws],
  data: () => ({
    logo:logo,
    img:img
  }),
  components: {
    TheAppLayout,
    TheGoTop
  }
};
</script>
<style lang="scss">
@import "@a/style/style.scss";
#app{
  font-family: Arial, 微軟正黑體, "Microsoft JhengHei", "Helvetica Neue", Arial, "Lucida Grande", "Lucida Sans Unicode", sans-serif;
  background-size: cover;
  background-repeat:repeat-y;
  #TheGoTop {
  position: fixed;
  right: 30px;
  bottom: 30px
}
}

</style>