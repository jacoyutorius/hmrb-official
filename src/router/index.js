import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Contents from '@/components/Contents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contents',
      component: Contents
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
