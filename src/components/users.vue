<template>
    <div>
        <button type="button" title="Edit account" data-toggle="modal" data-target="#add" style="float: right" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-plus"></i>Ajouter Enseignant </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Photo</th>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Prénom</th>
                <th scope="col" class="text-primary">Email</th>
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          

                <tr v-for="user in users" :key="user.id">
                    <td class="user_row">
                        <img src="../assets/img/images.png" class="rounded-circle" style='width: 50px;
  height: 50px;
  border-radius: 50%;' alt="image">
                    </td>
                    <td>  {{ user.firstname }}</td>
                    <td> {{ user.lastname }}</td>
                    <td> {{ user.email }} </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                    </td>
                </tr>
               




        


            </tbody>
        </table>
        <div class="modal fade" id="add">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Créer un nouveau compte</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <form @submit.prevent="handleRegister">
                     <div class="form-group">
                        <label for="username">Username</label>
                        <input name="username"  v-model="user.username"  type="text" class="form-control" id="username">
                    </div>


                    <div class="form-group">
                        <label for="firstName">Nom</label>
                        <input name="firstname"  v-model="user.firstname"   type="text" class="form-control" id="firstName" >
                    </div>

                    <div class="form-group">
                        <label for="lastNameInput">Prénom</label>
                        <input name="lastname"  v-model="user.lastname"  type="text" class="form-control" id="lastName" >
                    </div>

                    <div class="form-group">
                        <label for="emailInput">Email </label>
                        <input name="email" type="email"  v-model="user.email"  class="form-control" id="email" placeholder="" >
                    </div>

                    <div class="form-group">
                        <label for="type">Selectioner Type</label>
                       <select v-model="user.type" class="form-control" id="type">
                          <option>Maitre de conférence A</option>
                          <option>Maitre de conférence B</option>
                          <option>Professeur</option>
                        
                      </select>
                    </div>

                    <div class="form-group">
                        <label for="passwordInput">Mot de Pass</label>
                        <input name="password"  v-model="user.password" type="password" class="form-control" id="password" placeholder="" >
                         
                         



                    </div>

                    <div class="form-group">
                        <label for="confirmPasswordInput">Confirmer Mot de Pass</label>
                        <input name="confirmPassword"  type="password" class="form-control" id="confirmPassword"
                               placeholder="">
                    </div>

  <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
                <button type="submit" class="btn btn-primary"  >Créer</button>

                </form>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
              

                
    </div>





            </div>

        </div>
    </div>
</div>




 
    
</template>


<script>

import User from '../models/user'; 
import axios from  "axios"
import {mapGetters} from 'vuex'

export default {

computed: mapGetters({
         token:'auth/token'
        }),


  name: 'Register',
  data() {
    return {
      user: new User('','','','','',''),
      users:[]


     
    };
  },
  
  
  methods: {
    handleRegister() {
        const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
       
   
      axios.post(API_URL + 'admin/addprof', {

 user: this.user  } ,{ headers : headers}
        
      
    ).then((res)=>{
        this.getUsers();
        
        

    }).catch((err)=>{
        
     
      
    });
  },

    getUsers() {
       const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getprofs', { } ,{ headers : headers}
        
      
    ).then((res)=>{
      this.users = res.data;
      
    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     

  }
     
    
  },
   created() {
      this.getUsers();
    },
};



</script>
