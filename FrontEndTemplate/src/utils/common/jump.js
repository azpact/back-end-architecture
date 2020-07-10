import router from '@/router/index.js'

// 跳轉回登入
// 攜帶當前的頁面路由，登入完成後跳轉回原本頁面
export const toLogin = () => {
  router.replace({
   name:  'TheLogin',
   query: {
    redirect: router.currentRoute.fullPath
   }
  })
}

// 跳轉到 403 error page
// 攜帶當前的頁面路由，點擊連結後跳回原本頁面
export const to403Page = () => {
	router.replace({
		name:'403'
	})
}