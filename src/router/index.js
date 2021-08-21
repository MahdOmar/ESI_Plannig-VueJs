import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'
import Admin_Dashboard from '../components/admin_dashboard.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/users.vue'
import Entities from '../components/entities.vue'
import Manual from '../components/manual_generation.vue'
import Plannings from '../components/plannings.vue'
import G_Planning from '../components/general_planning.vue'
import Profile from '../components/profile.vue'
import All_Plannings from '../components/all_plannings.vue'
import WishForm from '../components/wish_form.vue'
import Planning_view from '../components/Planning_view.vue'
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate'


/*

export default[
  
    
    {path:'/'  , component:Login },
    {path:'/dashboard/signup'  , component:Signup },
    {path:'/dashboard'  , component:Admin_Dashboard, children:[
        {path:'welcome'  , component:Welcome },
        {path:'users'  , component:Users },
        {path:'entities'  , component:Entities },
        {path:'manual'  , component:Manual },
        {path:'plannings'  , component:Plannings },
        {path:'g_planning'  , component:G_Planning },
        {path:'all_planning'  , component:All_Plannings },
        {path:'profile'  , component:Profile },
        {path:'wish_form'  , component:WishForm }



     ] },
    {path:'/planning_view'  , component:Planning_view } 
]
    */
const router = new VueRouter({
    mode: 'history',
   
    routes :[

        {path:'/'  , component:Login },
        {path:'/dashboard/signup'  , component:Signup },
        {path:'/dashboard'  , component:Admin_Dashboard, children:[
            {path:'welcome'  , component:Welcome },
            {path:'users'  , component:Users },
            {path:'entities'  , component:Entities },
            {path:'manual'  , component:Manual },
            {path:'plannings'  , component:Plannings },
            {path:'g_planning'  , component:G_Planning },
            {path:'all_planning'  , component:All_Plannings },
            {path:'profile'  , component:Profile },
            {path:'wish_form'  , component:WishForm }
    
    
    
         ] },
        {path:'/planning_view'  , component:Planning_view } 

    ]
  });
  router.beforeEach((to, from, next) => {
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/');
    } else {
      next();
    }
  });


  export default router

/*
import router from './main.js'

router.beforeEach((to, _from, next) => {
    const publicPages = ['/'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/');
    } else {
      next();
    }
  });*/