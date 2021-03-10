import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Admin_Dashboard from './components/admin_dashboard.vue'
import './assets/css/main.css'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import './axios'



Vue.component('login',Login);
Vue.component('signup',Signup);
Vue.component('admin_dashboard',Admin_Dashboard);

Vue.use(VueRouter);
const router = new VueRouter({

  routes: Routes,
  mode: 'history'

});


new Vue({
  
  el: '#app',
  render: h => h(App),
  router: router
})



