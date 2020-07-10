<template>
  <div class="VFloatingBtn fixed-action-btn">
    <a href="#!" class="btn-floating" :class="vclass">
      <i class="material-icons" :class="iclass">{{icon}}</i>
    </a>
  </div>
</template>
<script>
export default {
  name: "VFloatingBtn",
  props: {
    href: {
      type: String,
      default: "#!"
    },
    icon: {
      type: String,
      default: "mode_edit"
    },
    vclass: {
      type: String,
      default: "waves-effect waves-light"
    },
    iclass:{
      type: String,
      default: ""
    }
  }
};
</script>