import Store from '@store'
import config from '@/config'

export default function(routerInstance){

  const isAuth = false;
  //无需授权的路由列表
  const whiteList = ['/login','/404','/error']

  routerInstance.beforeEach((to,from,next)=>{
    document.title = to.meta.title || config.defaultTitle;
    if(whiteList.indexOf(to.path) < 0 && isAuth){
      if(Store.state.user.token){
        next()
      }else{
        next({
          path: '/login',
          query: {
            redirect: to.path
          }
        })
      }
    }else{
      next();
    }
  })

  routerInstance.afterEach((to,from,next)=>{
      // console.log(to,from)
  })
}
