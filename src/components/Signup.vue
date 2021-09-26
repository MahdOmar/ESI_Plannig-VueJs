<template>
  <div class="vue-tempalte">
    <div class="vue-tempalte2">
      <!-- Navigation -->
      <nav
        class="
          navbar
          shadow
          bg-white
          rounded
          justify-content-between
          flex-nowrap flex-row
          fixed-top
        "
      >
        <div class="container">
          <a class="navbar-brand float-left" href="/"> ESI_PLANNING </a>

          <ul class="nav navbar-nav flex-row float-right">
            <li class="nav-item">
              <router-link class="btn btn-outline-primary" to="/"
                >Sign in</router-link
              >
            </li>
          </ul>
        </div>
      </nav>
      <div class="vertical-center">
        <div class="inner-block">
          <form @submit.prevent="register">
            <h3>Sign Up</h3>

            <div class="form-group">
              <label>Nom</label>
              <input
                type="text"
                v-model="nom"
                class="form-control form-control-lg"
              />
            </div>

            <div class="form-group">
              <label>Prénom</label>
              <input
                type="text"
                v-model="prénom"
                class="form-control form-control-lg"
              />
            </div>

            <div class="form-group">
              <label>Email </label>
              <input
                type="email"
                v-model="email"
                class="form-control form-control-lg"
              />
            </div>

            <div class="form-group">
              <label>Mot de Pass</label>
              <input
                type="password"
                v-model="password"
                class="form-control form-control-lg"
              />
            </div>

            <div class="form-group">
              <label>Confirmer Mot de Pass</label>
              <input
                type="password"
                v-model="password_confirm"
                class="form-control form-control-lg"
              />
            </div>

            <div class="mb-1">
              <label class="form-label">Choisis le type d'utilisateur</label>
            </div>
            <select
              class="form-select mb-3 form-control form-control-lg"
              name="role"
              aria-label="Default select example"
              v-model="type"
            >
              <option disabled value="">Please select one</option>
              <option selected value="professor">Professor</option>
              <option value="assosiate professor">Assosiate Professor</option>
              <option value="assistant professor">Assistant Professor</option>
            </select>

            <button type="submit" class="btn btn-dark btn-lg btn-block">
              Sign Up
            </button>

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
import axios from "axios";

export default {
  data() {
    return {
      nom: "",

      prénom: "",

      email: "",

      password: "",

      password_confirm: "",

      type: "",
    };
  },

  methods: {
    async register() {
      const data = {
        nom: this.nom,

        prénom: this.prénom,

        email: this.email,

        password: this.password,

        password_confirm: this.password_confirm,

        type: this.type,
      };

      const response = await axios.post("register", data);
    },
  },
};
</script>