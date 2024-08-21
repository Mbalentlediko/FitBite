import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ProductsView from '@/views/ProductsView.vue'
import ProductView from '@/views/ProductView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import AdminView from '@/views/AdminView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path:'/products',
    name: 'products',
    component: ProductsView
  },
  {
    path:'/product',
    name: 'product',
    component: ProductView
  },
  {
    path:'/contactUs',
    name: 'contactUs',
    component: ContactUsView
  },
  {
    path:'/Admin',
    name: 'Admin',
    component: AdminView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
