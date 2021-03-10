<template>
    <div class="vue-tempalte">
        <form @submit="register">
            <h3>Sign Up</h3>

            <div class="form-group">
                <label>Nom</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

             <div class="form-group">
                <label>Prénom</label>
                <input type="text" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Email </label>
                <input type="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Mot de Pass</label>
                <input type="password" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Confirmer Mot de Pass</label>
                <input type="password" class="form-control form-control-lg" />
            </div>




            <div class="mb-1">
		    <label class="form-label">Choisis le type d'utilisateur</label>
		  </div>
		  <select class="form-select mb-3 form-control form-control-lg"
		          name="role" 
		          aria-label="Default select example">
			  <option selected value="professor">Professor</option>
			  <option value="assosiate professor">Assosiate Professor</option>
              <option value="assistant professor">Assistant Professor</option>
		  </select>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

            <p class="forgot-password text-right mt-2 mb-4">
                <a href="/forgot-password">Forgot password ?</a>
            </p>

         

        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },

        methods:{
            
        }
    }
</script>