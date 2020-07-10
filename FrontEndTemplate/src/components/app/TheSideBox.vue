<template>
	<div id="TheSideBox">
		<transition
		enter-active-class="navbar-enter-active"
		leave-active-class="navbar-leave-active"
		>
		<div v-if="isScrollShow" class="sidebox">
			<a href="#!">
				<p>歡迎聯絡</p>
				<p>0800-666-666</p>
				<p>營業時間</p>
				<p>周一至周五</p>
				<p>10:00-20:00</p>
				<div>
					<img :src="img" alt="line">
				</div>
			</a>
		</div>
	</transition>
	<transition
		enter-active-class="phonenavbar-enter-active"
		leave-active-class="phonenavbar-leave-active"
		>
		<div v-if="isScrollShow" class="phonesidebox">
			<a href="#!">
				<p>歡迎聯絡0800-666-666</p>
				<div>
					<img :src="img" alt="line">
				</div>
			</a>
		</div>
	</transition>
</div>
</template>

<script>
import img from "@a/img/line-two.svg"
export default {
	name: 'TheSideBox',
	data:()=>({
		img:img,
		isScrollShow:false,
		fullHeight: 0,
	}),
	created(){
		// IE 增加監聽
		function addEvent(obj,type,fn){
		    if(obj.attachEvent){
		        obj.attachEvent('on'+type,function(){
		            fn.call(obj);
		        })
		    }else{
		        obj.addEventListener(type,fn,false);
		    }
		}
		// 使用 IE 監聽
		// addEvent(window,'scroll',this.fScroll);
    	// 測驗是否是 IE
    	function browserHandler (){
    		let userAgent = window.navigator.userAgent;  
    		let isIE = (userAgent.indexOf('MSIE') > 0) || (userAgent.indexOf('Trident/') > 0);  
    		let isEdge = userAgent.indexOf('Edge/') > 0;  
    		// this.setState({ showModal: isIE || isEdge  });
    		if(isIE){
    			return "isIE"
    		} else if(isEdge){
    			return "isEdge"
    		} else{
    			return "firefox ?"
    		}
    	}

    	window.addEventListener('scroll',this.fScroll,true);
	},
	beforeDestroy(){
		window.removeEventListener('scroll', this.fScroll,true);
	},
	methods:{
		fScroll(){
			// let scrollTop = document.documentElement.scrollTop;
			var scrollTop = (document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop;

			if(this.fullHeight>1493){
			    if(scrollTop < 42){
			    	this.isScrollShow = false
			    }else{
			    	this.isScrollShow = true
			    }
			}else{
				 if(scrollTop < 150){
			    	this.isScrollShow = false
			    }else{
			    	this.isScrollShow = true
			    }
			}
		}
	},
	mounted(){
		const vm = this;
    	vm.fullWidth = window.innerWidth;
  		vm.fullHeight = window.innerHeight;
    	window.onresize = () => {
    	  // vm.fullWidth = window.innerWidth;
    	  vm.fullHeight = window.innerHeight;
    	};

    	
		

    
 //    function addEvent(obj,ev,fn){
 //    	//obj为要绑定事件的元素，ev为要绑定的事件，fn为绑定事件的函数
	//  	if(obj.addEventListener){
	// 		obj.addEventListener(ev,fn,false);
	// 	}else if(obj.attachEvent){
	// 	    obj[ev+fn] = function(){fn.call(obj);}
	// 		obj.attachEvent("on" + ev,obj[ev+fn]);
	// 	}else {
	// 		obj['on'+type]=fn;
	//  	}
	// }
	// function removeEvent(obj,ev,fn){
	//  if(obj.removeEventListener){
	// 		 obj.removeEventListener(ev,fn);
	//  }else if(obj.detachEvent){
	// 	obj.detachEvent("on" + ev, obj[ev+fn]);
	//  }else {obj['on'+type]=null;
	//  }
	// }


	}
};
</script>

<style lang="scss" scoped>
@import "@a/style/style.scss";
#TheSideBox{
.sidebox,.phonesidebox{
	z-index:10;
	position: fixed;
	padding: 0.5rem;
	box-shadow: 0px 5px 5px $color4;
	text-align: center;
	border-radius: 10px;
	background-color: $warning;
	a{
		ont-weight: bold;
		color: $color1;
	}
	p{
		margin: 0.5rem 0;
	}
	p:nth-of-type(2){
		color: $warning2;
	}
	img{
		width: 32px;
		height: 32px;
	}
}
.sidebox{
	top: 70px;
	right: 25px;
}
.phonesidebox{
	left:0;
	z-index:100;
	bottom:0px;
	display:none;
	width:112px;
	height:70px;
	display:flex;
	p{
		margin:0;
		padding:0;
		font-size:0.8rem;
	}
}

.navbar-enter-active {
  animation: goNavbar 1s;
}
.navbar-leave-active {
  animation: backNavbar .3s;
}
.phonenavbar-enter-active {
  animation: goPhonenavbar 1s;
}
.phonenavbar-leave-active {
  animation: backPhonenavbar .3s;
}
@keyframes goNavbar {
  0% {
    top: -500px;
  }
  40%{
    top: 120px;
  }
  60%{
    top: 70px;
  }
  80%{
    top: 80px;
  }
  100% {
    top: 70px;
  }
}
@keyframes backNavbar {
  0% {
    top: 0px;
  }
  20%{
    top: 80px;
  }
  100% {
    top: -500px;
  }
}
@keyframes goPhonenavbar {
  0% {
    bottom: -500px;
  }
  40%{
    bottom: 30px;
  }
  60%{
    bottom: 0px;
  }
  80%{
    bottom: 15px;
  }
  100% {
    bottom: 0px;
  }
}
@keyframes backPhonenavbar {
  0% {
    bottom: 0px;
  }
  20%{
    bottom: 15px;
  }
  100% {
    bottom: -500px;
  }
}
}
@media (min-width: 748px) and (max-width: 1280px){
#TheSideBox{
	.sidebox{
		display:none;
	}
	.phonesidebox{
		display:block;
	}
}
}
@media (max-width: 747px){
#TheSideBox{
 	.sidebox{
  		display:none;
 	}
 	.phonesidebox{
		display:none;
	}
}
}
</style>
