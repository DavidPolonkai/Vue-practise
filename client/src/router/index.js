import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/helloworld/HelloWorld'
import Todo from '@/components/todo/ToDo'
import Login from '@/components/user/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
