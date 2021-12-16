import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import GoodsDetail from '../pages/GoodsDetail/GoodsDetail'
import Banner from '../pages/Banner/Banner'

import Category from '../pages/Category/Category'
import CategroyContent from '../pages/Category/componets/CategroyContent'
import CategoryFooter from '../pages/Category/componets/CategoryFooter'

import Shopcart from '../pages/ShopCart/Shopcart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/GoodsDetail/:id',
      props: true,
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/Banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/Category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Category/CategroyContent',
      name: 'Category/CategroyContent',
      component: CategroyContent
    },
    {
      path: '/Category/CategoryFooter',
      name: 'Category/CategoryFooter',
      component: CategoryFooter
    },
    {
      path: '/ShopCart',
      name: 'ShopCart',
      component: Shopcart
    }
  ]
})
