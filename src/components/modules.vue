<template>
    
    <div>
         <button type="button" title="Edit account" data-toggle="modal" data-target="#add_module" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Module </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Coeffition</th>
                <th scope="col" class="text-primary">Durée D'Examen</th>
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          
<!--
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
               
-->



        


            </tbody>
        </table>

        <div class="modal fade" id="add_module">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Module</h5>
              <h5 class="modal-title">SemesterId is {{ semesterid }}</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addModule">

                  <div class="form-group">
                      <label for="name">Nom du Module</label>
                      <input v-model="module.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="coef">Coeffition</label>
                      <input v-model="module.coefficient" name="coef" type="number" class="form-control" id="coef" required>
                  </div>
                  <div class="form-group">
                      <label for="group_name">Examen Heure</label>
                      <input v-model="module.examenH" name="ExamenH" type="number" class="form-control" id="ExamenH" max="4" required>
                  </div>

                   <div class="form-group">
                      <label for="group_name">Examen Minute</label>
                      <input  v-model="module.examenMin" name="ExamenMin" type="number" class="form-control" id="ExamenMin" max="59" required>
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

import Module from '../models/module'


export default{



 computed: mapGetters({
         semesterid:'auth/semesterId',
         token: 'auth/token'
        }),

        data(){

        return{
            module : new Module('','','','',''),
            modules : []
           
        };
    },

    methods: {

        addModule(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
          this.module.semester = this.semesterid
          console.log(this.module.semester +"heere")
         
       
   
    /*  axios.post(API_URL + 'admin/addmodule', {

 module: this.module  } ,{ headers : headers}
        
      
    ).then((res)=>{
        this.getmodules();
        
        

    }).catch((err)=>{
     
      
    });*/


        },








         getmodules(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getmodules', { semester:this.$parent.semesterId} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.modules = res.data;
      console.log(this.modules)
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },







    }




}



</script>
