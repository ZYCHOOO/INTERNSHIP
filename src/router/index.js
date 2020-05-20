import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
// 基础页面
import Main from '@/views/Main'
import Male from '@/views/Male'
import Female from '@/views/Female'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index, meta: { title: '起始页面' }},
    // 基础页面
    { path: '/Main', name: 'Main', component: Main, meta: { title: '首页' }},
    { path: '/Male', name: 'Male', component: Male, meta: { title: '男士' }},
    { path: '/Female', name: 'Female', component: Female, meta: { title: '女士' }}
  ]
})
