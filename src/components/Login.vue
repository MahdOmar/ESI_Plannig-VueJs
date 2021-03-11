<template>

    <div class="vue-tempalte">
        <div class="vue-tempalte2">
             <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="/" >
           ESI_PLANNING
        </a>
       <ul class="nav navbar-nav flex-row float-right">
         
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/dashboard/signup">Sign up</router-link>
          </li>
        </ul>
      </div>
    </nav>
     <div class="vertical-center">
        <div class="inner-block">
        <form @submit.prevent="login">
            <h3>Sign In</h3>

            <div class="form-group">
                <label>Email </label>
                <input type="email" v-model="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Mot de pass</label>
                <input type="password" v-model="password" class="form-control form-control-lg" />
            </div>
           

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

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

    import axios from 'axios'


    export default {
        data() {
            return {
                email :'',
                password:''
            }
        },

        methods:{
           async login(){
               const data = {
                   
                    email:this.email,

                    password:this.password,

                };

               const response = await axios.post('login',data);

               localStorage.setItem('token',response.data.token);
               this.$router.push("/dashboard/welcome");


            }
        }
    }
</script>