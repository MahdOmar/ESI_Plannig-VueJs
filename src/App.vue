<template>
  <div class="vue-tempalte">
   

    <!-- Main -->
    <div class="App">
     
         <router-view ></router-view>
       
    </div>
  </div>
</template>

<script>
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
import studentPlanning from './components/student_planning.vue'
import studentPlanningview from './components/student_planning_view.vue'






import axios from './axios'
export default{
  components: { Login, Signup,Admin_Dashboard,Welcome,Users,Entities,Manual,Plannings,G_Planning
  ,Profile,All_Plannings,WishForm,studentPlanning,studentPlanningview },
 /* data(){
    return{
        user : null
    }
  },
   async created(){
            const reponse = await axios.get('user');
            this.user = reponse.data;
        }
        */
}
</script>

