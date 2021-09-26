<template>
  <div class="vue-tempalte">
    <div class="vue-tempalte2">
      <!-- Navigation -->
      <nav
        class="
          navbar
          shadow
          rounded
          justify-content-between
          flex-nowrap flex-row
          fixed-top
        "
      >
        <div class="container">
          <a class="navbar-brand float-left text-white" href="/">
            ESI PLANNING
          </a>
          <ul class="nav navbar-nav flex-row float-right">
            <img
              class="rounded-circle"
              src="../assets/img/logo.png"
              style="height=40px; align-self: center;"
            />
            <li class="nav-item"></li>
          </ul>
        </div>
      </nav>
      <div class="vertical-center" style="min-height: 100vh">
        <div class="inner-block">
          <form @submit.prevent="handleLogin">
            <h3>Se connecter</h3>

            <div class="form-group">
              <label>Nom d'utilisateur </label>
              <input
                type="text"
                v-model="form.username"
                name="username"
                class="form-control form-control-lg"
              />
            </div>

            <div class="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                v-model="form.password"
                name="password"
                class="form-control form-control-lg"
              />
            </div>

            <div v-if="error" class="text-danger m-2">
              <p>{{ error }}</p>
            </div>

            <button type="submit" class="btn btn-primary btn-lg btn-block">
              <span>Se connecter</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vform";
import axios from "axios";
import VueRouter from "vue-router";

export default {
  data() {
    return {
      form: new Form({
        username: "",
        password: "",
      }),

      error: "",
    };
  },

  methods: {
    async handleLogin() {
      /*  const {data} = await this.form.post('http://localhost:4000/login');*/
      //  console.log(data)

      await this.form
        .post("http://localhost:4000/login")
        .then(({ data }) => {
          this.$store.dispatch("auth/saveToken", {
            token: data.accessToken,
            reftoken: data.refreshToken,
          });
          this.$store.dispatch("auth/fetchUser");

          // console.log(data)

          this.$router.push("dashboard/welcome");

          //this.$router.push( 'dashboard' )
        })
        .catch((err) => {
          this.error = err.response.data.error;
        });

      /*   this.$store.dispatch('auth/saveToken',{
           token:data.accessToken,
           reftoken:data.refreshToken
         })

         await this.$store.dispatch('auth/fetchUser');

     

         this.$router.push( 'dashboard/users' ) 
        */
    },
  },
};

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