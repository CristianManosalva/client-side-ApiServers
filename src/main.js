// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DomainInfo from './components/DomainInfo'
import SearchBar from './components/SearchBar'
import ServersRecord from './components/ServersRecord'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/domain',
      component: DomainInfo
    },
    {
      path: '/',
      component: SearchBar
    },
    {
      path: '/recientes',
      component: ServersRecord
    }

  ]
})

Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  //el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
