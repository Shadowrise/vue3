import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Books from '@/views/Books'
import Signin from '@/views/Signin'
import Signup from '@/views/Signup'
import Words from '@/views/Words'
import Profile from '@/views/Profile'
import Store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    beforeEnter: AuthGuard
  },
  {
    path: '/books',
    name: 'books',
    component: Books,
    beforeEnter: AuthGuard
  },
  {
    path: '/login',
    name: 'login',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '/words',
    name: 'words',
    component: Words,
    beforeEnter: AuthGuard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: AuthGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

function AuthGuard(from, to, next) {
  if (Store.getters.isUserAuthenticated) {
    next()
  } else {
    next({ name: 'login' })
  }
}

export default router
