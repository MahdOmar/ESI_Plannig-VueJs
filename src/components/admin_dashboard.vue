<template>
    <div>
         <div class="vertical-center">
        <div class="inner-block">
           <h1>Hello {{user.nom}}</h1> 
           <router-link  @click="removeToken" class="nav-link">Logout</router-link>

        </div>
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