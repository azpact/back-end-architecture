<template>
  <div class="VCircularImg">
    <img :src="img" :alt="alt" class="circle responsive-img">
  </div>
</template>
<script>
import img from "@a/img/headPhoto.jpg";

export default {
  name: "VCircularImg",
  props: {
    src: {
      type: String,
      default: img
    },
    alt:{
      type: String,
      default: "Vue Image"
    }
  },
  data:()=>({
    img:img
  })
};
</script>