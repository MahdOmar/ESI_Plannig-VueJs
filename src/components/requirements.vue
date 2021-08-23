<template>

<div>

      <button type="button" title="Edit account" data-toggle="modal" data-target="#add_requirement" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Exigence </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Nombre</th>
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          

                <tr v-for="requirement in requirements" :key="requirement.id">
                    
                    <td>  {{requirement.name }}</td>
                    <td> {{ requirement.nombre }}</td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                    </td>
                </tr>
               




        


            </tbody>
        </table>

           <div class="modal fade" id="add_requirement">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Module</h5>
            
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addRequirement">

                  <div class="form-group">
                      <label for="name">Nom d'exigence</label>
                      <input v-model="requirement.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="coef">Nombre</label>
                      <input v-model="requirement.nombre" name="coef" type="number" class="form-control" id="coef" required>
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


export default{



 computed: mapGetters({
    
         token: 'auth/token'
        }),

        data(){

        return{
            requirement : new Requirement('',''),
            requirements : []
           
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
        this.getrequirements();
        
        

    }).catch((err)=>{
     
      
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







    },
     created() {
      this.getrequirements();
    },




}



</script>
