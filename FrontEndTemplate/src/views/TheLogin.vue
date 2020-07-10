<template>
	<div id="TheLogin">
		<input type="text" v-model="email">
    <input type="text" v-model="password">
	   <button @click="fLogin()">登入</button>
    <button @click="get()">Get</button>
     post:{{cLogin}}
  </div>
</template>

<script>

export default {
  data:()=>({
    email:null,
    password:null
  }),
  computed:{
  	cLogin(){
      return { 
        email:this.email,
        password:this.password 
      }
    }
  },
  methods:{
    fLogin(){
      this.$store.dispatch('fLogin',this.cLogin)
    },
    get(){
      this.$store.dispatch('get')
    }
  }
};
</script>

<style lang="css" scoped>
</style>
