 
 <template>
     <div class="vertical-center">
        <div class="inner-block">
           <h1 v-if="user">Hello {{user.nom}}</h1> 
           <h1 v-if="!user">you are not logged in</h1> 
           <router-link  @click="removeToken" class="nav-link">Logout</router-link>

        </div>
         </div>
 </template>
 <script>

    import axios from 'axios'

    export default {
       
       props:['user'],
       methods:{
           removeToken(){
               localStorage.removeItem('token');
               this.$router.push('/');
           }
       }

       

        }
    
</script>