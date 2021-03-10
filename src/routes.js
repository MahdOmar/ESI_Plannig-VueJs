import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Admin_Dashboard from './components/admin_dashboard.vue'


export default [
    {path:'/'  , component:Login },
    {path:'/dashboard/signup'  , component:Signup },
    {path:'/dashboard'  , component:Admin_Dashboard }
]