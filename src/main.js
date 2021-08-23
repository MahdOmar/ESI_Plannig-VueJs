import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue'
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Admin_Dashboard from './components/admin_dashboard.vue'
import Welcome from './components/welcome.vue'
import Users from './components/users.vue'
import Entities from './components/entities.vue'
import Manual from './components/manual_generation.vue'
import Plannings from './components/plannings.vue'
import G_Planning from './components/general_planning.vue'
import Profile from './components/profile.vue'
import WishForm from './components/wish_form.vue'
import All_Plannings from './components/all_plannings.vue'
import Modules from './components/modules.vue'
import Requirements from './components/requirements.vue'
import Cours from './components/cours.vue'
import babelPolyfill from 'babel-polyfill'
import store from './store/index.js'
import VeeValidate from 'vee-validate';
import './assets/css/main.css'
import VueRouter from 'vue-router'
import router from './routes.js'



import Routes from './router/index.js';

import './axios'



Vue.component('login',Login);
Vue.component('signup',Signup);
Vue.component('welcome',Welcome);
Vue.component('users',Users);
Vue.component('entities',Entities);
Vue.component('manual',Manual);
Vue.component('plannings',Plannings);
Vue.component('g_planning',G_Planning);
Vue.component('profile',Profile);
Vue.component('wish_form',WishForm);
Vue.component('all_plannings',All_Plannings);
Vue.component('modules', Modules);
Vue.component('requirements',Requirements);
Vue.component('cours' ,Cours)

Vue.component('admin_dashboard',Admin_Dashboard);
Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VeeValidate);


/*export const router = new VueRouter({

  routes: Routes,
  mode: 'history'

});*/


new Vue({
  
  el: '#app',
  router,

  store,
  render: h => h(App),
  
 
  
})



