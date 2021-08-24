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
import All_Plannings from './components/all_plannings.vue'
import WishForm from './components/wish_form.vue'
import Planning_view from './components/Planning_view.vue'
import Modules from './components/modules.vue'
import Requirements from './components/requirements.vue'
import Cours from './components/cours.vue'
import Responsables from './components/responsables.vue'
import Subrequirements from './components/sub-requirement.vue'
import SectionsandGroupes from './components/sections-groupes.vue'
import Sections from './components/sections.vue'
import Groupes from './components/groupes.vue'

import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import guest from './middlewares/guest'
import store from './store/index.js'
import checkAuth from './middlewares/auth-check'
import auth from './middlewares/auth'
import middlewarePipeline from './router/middlewarePipeline'



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

        {path:'/'  , component:Login,meta : { middleware:[guest]}  },
       
        {path:'/dashboard'  , component:Admin_Dashboard ,children:[
            {path:'welcome'  , component:Welcome },
            {path:'users'  , component:Users ,name:'users' ,meta :{ middleware : [auth , checkAuth]}},
            {path:'entities'  , component:Entities ,meta :{ middleware : [auth , checkAuth]} ,
             children:[ {path:'modules' , component:Modules ,meta :{ middleware : [auth , checkAuth]} },
                         {path:'cours',component:Cours , meta :{ middleware : [auth , checkAuth]}},
                         {path:'responsables',component:Responsables , meta :{ middleware : [auth , checkAuth]}}]
          
          },
          {path:'requirements'  , component:Requirements ,name:'requirements' ,meta :{ middleware : [auth , checkAuth]}},
          {path:'subrequirements'  , component:Subrequirements ,name:'subrequirements' ,meta :{ middleware : [auth , checkAuth]}},
          
          {path:'sections-groupes'  , component:SectionsandGroupes  ,meta :{ middleware : [auth , checkAuth]}
        ,children :[ {path:'sections',component:Sections , meta :{ middleware : [auth , checkAuth]}},
                     {path:'groupes',component:Groupes , meta :{ middleware : [auth , checkAuth]}}]},
          

          
            {path:'manual'  , component:Manual ,meta :{ middleware : [auth , checkAuth]} },
            {path:'plannings'  , component:Plannings ,meta :{ middleware : [auth , checkAuth]} },
            {path:'g_planning'  , component:G_Planning },
            {path:'all_planning'  , component:All_Plannings ,meta :{ middleware : [auth , checkAuth]} },
            {path:'profile'  , component:Profile ,meta :{ middleware : [auth , checkAuth]} },
            {path:'wish_form'  , component:WishForm }
    
    
    
         ] },
        {path:'/planning_view'  , component:Planning_view } 

    ]

    
  });

  router.beforeEach((to , from, next) => {
   if(!to.meta.middleware) {
     console.log(to);
     return next()}
   
   const middleware = to.meta.middleware
   const context = {
     to,
     from,
     next,
     store
   



   }
   return middleware[0]({
     ...context ,
     next:middlewarePipeline(context,middleware,1)
   })
    
  })
  
  


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