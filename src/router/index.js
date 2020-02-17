import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import shoppingCar from '@/components/shoppingCar'
import News from '@/components/Home_children/news'
import New1 from '@/components/Home_children/new'
import Store from '@/components/Home_children/store'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/shoppingCar',
      name: 'shoppingCar',
      component: shoppingCar
    },
    {
      path: '/home/news',
      name: 'news',
      component: News
    },
    {
      path: '/home/store',
      name: 'store',
      component: Store
    },
    {
      path: '/home/news/new1',
      name: 'new1',
      component: New1
    }
  ]
})
