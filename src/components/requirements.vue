<template>

<div class="m-4">

      <button type="button" title="Edit account" data-toggle="modal" data-target="#add_requirement" style="float: right" class="btn btn-primary btn-sm m-2 "><i class="fa fa-fw fa-plus"></i>Ajouter Endroit Globale </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
               
                <th scope="col" class="text-primary text-center">Actions</th>
            </tr>
            </thead>

            <tbody>
          

                <tr v-for="requirement in requirements" :key="requirement.id">
                    
                    <td>  {{requirement.name }}</td>
                  
                   
                    <td class="text-center">
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_requirement" @click="getRequirement(requirement)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click="deletereq(requirement)"  ><i class="fa fa-fw fa-trash"></i></button>
                         <button type="button" title="Delete account" class="btn btn-info btn-sm" @click="saveRequirement(requirement)" >Gérer</button>
                    </td>
                </tr>
               




        


            </tbody>
        </table>

           <div class="modal fade" id="add_requirement">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Endroit</h5>
            
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addRequirement" class="text-left">

                  <div class="form-group">
                      <label for="name">Nom d'Endroit</label>
                      <input v-model="requirement.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  
                <div v-if="error" class="text-danger m-2">
                         <p> {{ error }}</p>

                    </div>
                    <div v-if="success" class="text-success m-2">
                         <p> {{ success }}</p>

                    </div>


                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Créer</button>
          </div>
                     

              </form>
          </div>

          <!-- Modal footer -->
          

      </div>
  </div>
</div>

<!--    Modufy Requirement    -->

     <div class="modal fade" id="edit_requirement">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Endroit</h5>
            
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="editRequirement"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom d'Endroit</label>
                      <input v-model="requirementE.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  
                <div v-if="error" class="text-danger m-2">
                         <p> {{ error }}</p>

                    </div>
                    <div v-if="success" class="text-success m-2">
                         <p> {{ success }}</p>

                    </div>


                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Créer</button>
          </div>
                     

              </form>
          </div>

          <!-- Modal footer -->
          

      </div>
  </div>
</div>






</div>
    



</template>

<script>

import axios from 'axios'
import {mapGetters} from 'vuex'

import Module from '../models/requirement'
import Requirement from '../models/requirement'
import $ from 'jquery'


export default{



 computed: mapGetters({
    
         token: 'auth/token'
        }),

        data(){

        return{
            requirement : new Requirement('',''),
            requirementE:'',
            requirements : [],
              error:'',
            success:''
           
        };
    },

    methods: {

        addRequirement(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
       
          
         
       
   
      axios.post(API_URL + 'admin/addrequirement', {

 requirement: this.requirement  } ,{ headers : headers}
        
      
    ).then((res)=>{
         this.error = ''
          this.success = "Endroit ajouté";
        this.getrequirements();
        setTimeout(function(){
      $("#add_requirement").modal('hide')
   }, 1 * 1000);


        
        

    }).catch((err)=>{
         this.success =""
        this.error = err.response.data.requirement
     
      
    });


        },








         getrequirements(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getrequirement', {} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.requirements = res.data;
    
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },
       saveRequirement(requirement){
           this.$store.dispatch('auth/saveRequirement',{
                requirement: requirement
            });

           
        this.$router.push('subrequirements')
        },

        getRequirement(req){
            this.requirementE = Object.assign({},req)



        },

        splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deletereq(req){
      this.splice(this.requirements,req)
   }



       







    },
     created() {
      this.getrequirements();
    },




}



</script>
