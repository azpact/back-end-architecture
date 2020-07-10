<template>
	<div id="TheWs">
		TheWs
    <p v-if="ServerMessage">ServerMessage{{ServerMessage}}</p>
		<p>{{WsList}}</p>
	</div>
</template>

<script>


export default {
	name: 'TheWs',
  computed:{
    WsList(){
      return this.$store.states.WsList
    },
    ServerMessage(){
      return this.$store.states.ServerMessage
    }
  }
};
</script>

<style lang="css" scoped>
</style>
