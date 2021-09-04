<template>
    
    <div>
         <button type="button" title="Edit account" data-toggle="modal" data-target="#add_module" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Module </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
                <th scope="col" class="text-primary">Coefficient</th>
                <th scope="col" class="text-primary">Durée d'Examen</th>
                

               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          

                <tr v-for="module in modules" :key="module.id">
                    
                    <td>  {{module.name }}</td>
                    <td> {{ module.coefficient }}</td>
                    <td v-if="module.examenMin == 0"> {{ module.examenH }}h </td> 
                    <td v-else>{{ module.examenH }}h{{ module.examenMin }}min</td>
                     
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i></button>
                        <button type="button" title="Delete account" class="btn btn-info m-2 btn-sm" @click="saveModuleId(module)"><i class="fa fa-fw fa-plus"></i>Gérer</button>
                    </td>
                </tr>
               




        


            </tbody>
        </table>

        <div class="modal fade" id="add_module">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Module</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
               <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>


                </div>


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
                   <div v-if="error" class="text-danger m-2">
                         <p> {{ error }}</p>

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


<!-- ADD COURS TD TP-->












    </div>


</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

import Module from '../models/module'
import $ from 'jquery'


export default{



 computed: mapGetters({
         semesterid:'auth/semesterId',
         token: 'auth/token',
         modules:'auth/modules'
        }),

        data(){

        return{
            module : new Module('','','','',''),
         //   modules : null,
            moduleId:'',
            selected:'',
            error:'',
            success:''
           
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
         
       
   
      axios.post(API_URL + 'admin/addmodule', {

 module: this.module  } ,{ headers : headers}
        
      
    ).then((res)=>{
         this.error = ''
          this.success = "Module ajouté";
          


        this.getmodules();
           setTimeout(function(){
      $("#add_module").modal('hide')
   }, 1 * 1000);

        
        

    }).catch((err)=>{
         this.success =""
        this.error = err.response.data.module
     
      
    });


        },








         getmodules(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getmodules', { semester:this.semesterid} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.$store.dispatch("auth/saveModules", {
        modules: res.data
      });
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

           saveModuleId(module){
        this.moduleId = module.id;
        this.$store.dispatch('auth/saveModuleId',{
                moduleId: this.moduleId
            });

           
        this.$router.push('cours')
       

    },

        






    },
     mounted() {
   //      this.modules = this.$parent.modules
     
   console.log('child '+this.modules)
    },




}



</script>
