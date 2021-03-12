import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Admin_Dashboard from './components/admin_dashboard.vue'
import Welcome from './components/welcome.vue'
import Users from './components/users.vue'
import Entities from './components/entities.vue'

export default [
    {path:'/'  , component:Login },
    {path:'/dashboard/signup'  , component:Signup },
    {path:'/dashboard'  , component:Admin_Dashboard, children:[
        {path:'welcome'  , component:Welcome },
        {path:'users'  , component:Users },
        {path:'entities'  , component:Entities }


    ] },
    
]