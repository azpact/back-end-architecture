<template>
  <div class="VIcon">
    <i class="material-icons" :class="iclass">{{icon}}</i>
  </div>
</template>
<script>
export default {
  name: "VIcon",
  props: {
    icon: {
      type: String,
      default: "add_circle"
    },
    iclass: {
      type: String,
      default: "pink-text lighten-5"
    }
  }
};
</script>
<style lang="scss" scoped>
.VIcon {
  cursor: pointer;
}
</style>