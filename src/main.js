import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import Login from './Login.vue'
import Signup from './Signup.vue'
import './assets/css/main.css'
import VueRouter from 'vue-router'
import Routes from './routes.js'



Vue.component('login',Login);
Vue.component('signup',Signup);

Vue.use(VueRouter);
const router = new VueRouter({

  routes:Routes

});


new Vue({
  
  el: '#app',
  render: h => h(App),
  router: router
})
