<template>
	<div id="TheHeader">
		<slot name="keywordbar"></slot>
		<slot name="navbar"></slot>
		<slot name="sidebar"></slot>
		<slot name="phonenavbar"></slot>
	</div>
</template>

<script>
export default {
  name: 'TheHeader',
  data:()=>({
  	//
  })
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";

</style>
