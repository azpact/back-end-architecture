<template>
	<div id="TheFooter">
		<div>
			&nbsp;
		</div>
		<div>
			<slot name="bottomfooter"></slot>
			<slot name="fixedbottom"></slot>
		</div>
		<div>
			<slot name="phonebottomnav"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TheFooter',
	data:()=>({
		//
	})
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";

#TheFooter{
  display:flex;
  margin-top:0.5rem;
  margin-bottom:60.7px;
  background-color:$color3;
  &>div:nth-of-type(1){
    width:120px;
    z-index:9;
  }
  &>div:nth-of-type(2){
    width:100%;
  }
}
@media (min-width: 1000px) and (max-width: 1493px){
	#TheFooter{
		margin-bottom:55px;
		&>div:nth-of-type(1){
			display:none;
		}
	}
}
@media (min-width: 748px) and (max-width:999px){
	#TheFooter{
		margin-bottom:55px;
		padding-left:2rem;
		&>div:nth-of-type(1){
			display:none;
		}
		&>div:nth-of-type(2){
    		padding-left:1rem;
  		}
	}
}
@media (max-width: 747px){
	#TheFooter{
		&>div:nth-of-type(1){
			display:none;
		}
	}
}
</style>
