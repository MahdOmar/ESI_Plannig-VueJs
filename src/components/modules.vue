<template>
    
    <div>
         <button type="button"  data-toggle="modal" data-target="#add_module" style="float: right" class="btn btn-primary btn-sm m-2 "><i class="fa fa-fw fa-plus"></i>Ajouter Module </button>

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
                        <button type="button" title="Editer " class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_module" @click="getModule(module)"  ><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Supprimer " class="btn btn-danger btn-sm" @click="deletemodule(module)"><i class="fa fa-fw fa-trash"></i></button>
                        <button type="button"  class="btn btn-info  btn-sm" @click="saveModuleId(module)">Gérer</button>
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


              <form @submit.prevent="addModule" class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Module</label>
                      <input v-model="module.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="coef">Coeffition</label>
                      <input v-model="module.coefficient" name="coef" type="number" class="form-control" id="coef" min="1" max="5" required>
                  </div>
                  <div class="form-group row">
                      <div class="col-md-6">
                           <label for="group_name">Examen Heure</label>
                      <input v-model="module.examenH" name="ExamenH" type="number" class="form-control" id="ExamenH" min="1" max="4" required>
                
                      </div>
                      <div class="col-md-6">
                         <label for="group_name">Examen Minute</label>
                    <input  v-model="module.examenMin" name="ExamenMin" type="number" class="form-control" id="ExamenMin" min="0" max="59" required>
                

                      </div>


                     
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
<!--      Modify Module        -->

 <div class="modal fade" id="edit_module">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Module</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
               <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>


                </div>


              <form @submit.prevent="EditModule"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Module</label>
                      <input v-model="moduleE.name" name="name" type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="coef">Coefficient</label>
                      <input v-model="moduleE.coefficient" name="coef" type="number" class="form-control" id="coef" min="1" max="5" required>
                  </div>
                  <div class="form-group row">
                      <div class="col-md-6">
                           <label for="group_name">Examen Heure</label>
                      <input v-model="moduleE.examenH" name="ExamenH" type="number" class="form-control" id="ExamenH" min="1" max="4" required>
                  
                      </div>
                      <div class="col-md-6">
                          <label for="group_name">Examen Minute</label>
                      <input  v-model="moduleE.examenMin" name="ExamenMin" type="number" class="form-control" id="ExamenMin" min="0" max="59" required>
                
                      </div>
                     
                  </div>

                  
                   <div v-if="error" class="text-danger m-2">
                         <p> {{ error }}</p>

                    </div>
                  



                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Editer</button>
          </div>
                     

              </form>
          </div>

          <!-- Modal footer -->
          

      </div>
  </div>
</div>




<!-- ADD COURS TD TP-->



    <div class="modal" id="delete">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      
     
      <div class="modal-body text-center text-danger">
        {{ error }}
      </div>

     

    </div>
  </div>
</div>









    </div>


</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import Swal from 'sweetalert2'

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
            moduleE:'',
            moduleName:'',
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
          
         var that = this
        this.getmodules();
        var that=this
           setTimeout(function(){
               that.success = ''
      $("#add_module").modal('hide')
       for (var key in that.module ) {
  that.module[key] = null;
       }
   }, 1 * 1000);

        
        

    }).catch((err)=>{
         this.success =""
        this.error = err.response.data.module
     
      
    });


        },

        EditModule(){

             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
          this.module.semester = this.semesterid
  
         
       
   
             axios.post(API_URL + 'admin/updatemodule', {name:this.moduleE.name, hour:this.moduleE.examenH, 


            min:this.moduleE.examenMin , coefficient:this.moduleE.coefficient   ,id: this.moduleE.id  } ,{ headers : headers}
        
      
    ).then((res)=>{
         this.error = ''
          this.success = "Module Edité";
          
        this.getmodules();
        var that = this
           setTimeout(function(){
      $("#edit_module").modal('hide')
      that.success =''
   }, 1 * 1000);

        
        

    }).catch((err)=>{
         this.success =""
        this.error = err.response.data.module
     
      
    });





        },

        deletemodule(module){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
          Swal.fire({
            title: 'Vous êtes sûr?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'Alerte',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Oui, Supprimer!'
        }).then((result) => {
            if (result.value) {

                  axios.post(API_URL + 'admin/deletemodule', { id:module.id

             } ,{ headers : headers}
        
      
    ).then((res)=>{
          this.error = ''
        
          
        this.getmodules();
        
        

    }).catch((err)=>{
        this.success =""
        this.error = err.response.data.error
        $("#delete").modal('show')
      
        setTimeout(function(){
      $("#delete").modal('hide')
      
      
   }, 1 * 4000);
     // console.log(err.response.data)
        
     
      
    });

               

            }
        })










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
     //   this.moduleId = module.id;
        this.$store.dispatch('auth/saveModuleId',{
                moduleId: module
            });

            this.moduleName = module.name

           
        this.$router.push('cours')
       

    },
    getModule(module){
        this.moduleE = Object.assign({},module)


    },

    splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

  /* deletemodule(module){
       console.log("ouiiiiiiiii")
      this.splice(this.modules,module)
   }*/

        






    },
     mounted() {
   //      this.modules = this.$parent.modules
     
  
    },




}



</script>
