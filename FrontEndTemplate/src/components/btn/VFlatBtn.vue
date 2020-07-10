<template>
  <div class="VFlatBtn">
    <a href="#!" class="btn-flat" :class="vclass"> {{name}}
      <i class="material-icons" :class="iclass">{{icon}}</i>
    </a>
  </div>
</template>
<script>
export default {
  name: "VFlatBtn",
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
      default:""
    },
    iclass :{
      type: String,
      default:"left"
    }
  }
};
</script>