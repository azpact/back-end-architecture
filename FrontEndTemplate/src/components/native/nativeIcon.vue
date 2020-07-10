<template>
	<div id="nativeIcon">
		<i class="material-icons">{{icon[0].icon}}</i>
		<p>{{this.icon[0].name}}</p>
	</div>
</template>

<script>
export default {
	name: 'nativeIcon',
	data:()=>({
		
	}),
	props:{
		icon: {
			type: Array,
			default: () => {
				return []
			}
		},
	}
};
</script>

<style lang="css" scoped>
</style>
