import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Books from '@/components/Books'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Words from '@/components/Words'
import Profile from '@/components/Profile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/words',
    name: 'words',
    component: Words
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
