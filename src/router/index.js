import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Header from '../components/header.vue'
import Topic from '../components/topic.vue'
import User from '../components/user.vue'
import Api from '../components/api.vue'
import About from '../components/about.vue'

Vue.use(Router)

export default new Router({
  //mode:'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      components: {
        default: Home,
        header: Header
      }
    },
    {
      path: '/topic/:id',
      components: {
        default: Topic,
        header: Header
      }
    },
    {
      path: '/user/:name',
      components: {
        default: User,
        header: Header
      }
    },
    {
      path: '/api',
      components: {
        default: Api,
        header: Header
      }
    },
    {
      path: '/about',
      components: {
        default: About,
        header: Header
      }
    },
  ]
})
