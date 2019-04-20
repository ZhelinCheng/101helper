import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home/index')
const Config = () => import('../views/Config/index')
const Tasks = () => import('../views/Tasks/index')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/config',
      name: 'config',
      component: Config
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
