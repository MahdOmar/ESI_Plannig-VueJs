<template>
  <div class="vue-tempalte">
   

    <!-- Main -->
    <div class="App">
     
         <router-view :user="user"></router-view>
       
    </div>
  </div>
</template>
<script>
import Login from './components/Login.vue'
import Signup from './components/Signup.vue'
import Admin_Dashboard from './components/admin_dashboard.vue'
import axios from './axios'
export default{
  components: { Login, Signup,Admin_Dashboard },
  data(){
    return{
        user : null
    }
  },
   async created(){
            const reponse = await axios.get('user');
        }
        
}
</script>

