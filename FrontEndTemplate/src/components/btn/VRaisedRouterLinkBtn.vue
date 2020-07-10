<template>
  <div class="VRaisedRouterLinkBtn">
    <router-link :to="to" class="btn" :class="vclass">{{name}}
      <i class="material-icons" :class="iclass">{{icon}}</i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "VRaisedRouterLinkBtn",
  props: {
    name: {
      type: String,
      default:"按鈕"
    },
    to :{
      type: String,
      default:"/"
    },
    icon:{
      type: String,
      default:"cloud"
    },
    vclass: {
      type: String,
      default:"waves-effect waves-light"
    },
    iclass :{
      type: String,
      default:"left"
    }
  }
};
</script>
<style>
  .VRaisedBtn{
    display: flex;
    justify-content: center;
  }
</style>