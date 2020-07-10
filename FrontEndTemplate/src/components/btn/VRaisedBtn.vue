<template>
  <div class="VRaisedBtn">
    <a :href="href" class="btn" :class="vclass" :target="target"> {{name}}
      <i class="material-icons" :class="iclass">{{icon}}</i>
    </a>
  </div>
</template>
<script>
export default {
  name: "VRaisedBtn",
  props: {
    name: {
      type: String,
      default:"按鈕"
    },
    href :{
      type: String,
      default:"#!"
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
    },
    target:{
      type: String,
      default:""
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