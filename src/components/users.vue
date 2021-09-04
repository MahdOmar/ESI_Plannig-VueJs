<template>
    <div class="m-4">
        <button type="button" title="Edit account" data-toggle="modal" data-target="#add" style="float: right" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-plus"></i>Ajouter Enseignant </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Photo</th>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Prénom</th>
                <th scope="col" class="text-primary">Email</th>
                <th scope="col" class="text-primary">Type</th>
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
                    <td> {{ user.type }} </td>
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm "><i class="fa fa-fw fa-trash"></i></button>
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
                <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>


                </div>
               

                <form ref='form' @submit.prevent="handleRegister">
                     <div class="form-group">
                        <label for="username">Username</label>
                        <input name="username"  v-model="user.username"  type="text" class="form-control" id="username" required>
                    </div>


                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="firstName">Nom</label>
                        <input name="firstname"  v-model="user.firstname"   type="text" class="form-control" id="firstName" required>

                        </div>
                        <div class="col-md-6">
                            
                         <label for="lastNameInput">Prénom</label>
                        <input name="lastname"  v-model="user.lastname"  type="text" class="form-control" id="lastName"  required>
                  

                        </div>
                       
                    </div>

                    

                    <div class="form-group row">
                        <div class="col-md-6">
                             <label for="emailInput">Email </label>
                        <input name="email" type="email"  v-model="user.email"  class="form-control" id="email" placeholder="" required>
                     
                        </div>
                        <div class="col-md-6">
                             <label for="type">Selectioner Type</label>
                       <select v-model="user.type" class="form-control" id="type" required>
                          <option >MCA</option>
                          <option>MCB</option>
                          <option>Pr</option>
                        
                      </select>


                        </div>


                              
                    </div>

                  

                    <div class="form-group row">
                        <div class="col-md-6">
                            <label for="passwordInput">Mot de Pass</label>
                        <input name="password"  v-model="user.password" type="password" class="form-control" id="password" placeholder="" required >
                         

                        </div>

                        <div class="col-md-6">
                            <label for="confirmPasswordInput">Confirmer Mot de Pass</label>
                        <input  v-model="password" name="confirmPassword"  type="password" class="form-control" id="confirmPassword"
                               placeholder="" @keyup="checkPass" required>

                               <div  class="text-danger m-2">
                         <p v-if="checked" class="text-danger"> {{ checked }}</p>
                         <p v-if="passcheck" class="text-success"> {{ passcheck }}</p>
                         


                        </div>


                    </div>

                   


                    </div>

                    <div v-if="error" class="text-danger m-2">
                         <p> {{ error }}</p>

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
import $ from 'jquery'
import {mapGetters} from 'vuex'

export default {

computed: mapGetters({
         token:'auth/token'
        }),


  name: 'Register',
  data() {
    return {
      user: new User('','','','','',''),
      users:[],
      error:'',
      password:'',
      checked:'',
      passSuccess:false,
      passcheck:'',

      success:''


     
    };
  },
  
  
  methods: {
    handleRegister() {
        
        const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

       if(this.passSuccess){

             axios.post(API_URL + 'admin/addprof', {

 user: this.user  } ,{ headers : headers}
        
      
    ).then((res)=>{
          this.error = ''
          this.success = "Enseignant ajouté";
          
        this.getUsers();
          setTimeout(function(){
      $("#add").modal('hide')
   }, 1 * 1000);
        
        

    }).catch((err)=>{
        this.success =""
        this.error = err.response.data.error
     // console.log(err.response.data)
        
     
      
    });

       }
   
    
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

       //
     
      
    });
     

  },
  checkPass(){
      if(this.password != this.user.password)
      {
          this.passcheck = ''
          this.passSuccess = false
          this.checked = "le mot de passe ne correspond pas "
      }
      else{
          this.checked = ''
          this.passcheck = 'mot de passe correspondant'
          this.passSuccess = true
      }
  }
     
    
  },
   created() {
      this.getUsers();
    },
};



</script>
