<template>
    <div class="vue-tempalte">
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


            }
        }
    }
</script>