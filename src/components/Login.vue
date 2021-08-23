<template>

    <div class="vue-tempalte">
        <div class="vue-tempalte2">
             <!-- Navigation -->
    <nav class="navbar shadow  rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand  float-left" href="/" >
           ESI_PLANNING
        </a>
       <ul class="nav navbar-nav flex-row float-right">
        <img class="rounded-circle" src="../assets/img/logo.png" style="height=30px; align-self: center;">
          <li class="nav-item">
          
          </li>
        </ul>
      </div>
    </nav>
     <div class="vertical-center">
        <div class="inner-block">
        <form @submit.prevent="handleLogin">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Username </label>
                <input type="text" v-model="form.username" name="username"  class="form-control form-control-lg" />
              
        </div>
            

            <div class="form-group">
                <label>Mot de pass</label>
                <input type="password" v-model="form.password" name="password"   class="form-control form-control-lg
                " />
             
               
            </div>
           

            <button type="submit" class="btn btn-dark btn-lg btn-block" >
                
            <span>Sign In</span></button>

            <p class="forgot-password text-right mt-2 mb-4">
                <a href="/forgot-password">Forgot password ?</a>
            </p>
            
           

         

        </form>
        </div>
     </div> 
     </div>
    </div>
</template>

<script>

import {Form} from 'vform'
import axios from 'axios';
import VueRouter from 'vue-router'

export default { 

  




      data() {
               return{
                 form: new Form({
                   username:'',
                   password:''
                 })


               }



      },

      methods: {

       async handleLogin(){
   
         const {data} = await this.form.post('http://localhost:4000/login');
      
         
         this.$store.dispatch('auth/saveToken',{
           token:data.accessToken,
           reftoken:data.refreshToken
         })

         await this.$store.dispatch('auth/fetchUser');

     

         this.$router.push( 'dashboard/users' ) 
        


         
       
      

       }

      }


}












/*
import User from '../models/user';
export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/dashboard/users');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/dashboard/users');
            },
            error => {
              this.loading = false;
              this.message =
               
                error.response.data.error.toString();
            }
          );
        }
      });
    }
  }
};
*/



























   // import axios from 'axios'
   
  // import reactive from 'vue'

   // export default {
     
       
     /*   data() {
            return {
                username :'',
                password:''
            }
        },

        methods:{
          async login(){
               const data = {
                   
                    username:this.username,

                    password:this.password,

                };

               const response = await axios.post('login',data);

               localStorage.setItem('token',response.data.token);
               console.log(response.data.user);
               this.$router.push("/dashboard/users");


            }
        }*/
  //  }

</script>