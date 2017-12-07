import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Header from '../components/header.vue'
import Topic from '../components/topic.vue'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
