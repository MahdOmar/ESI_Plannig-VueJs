<template>
    
    <div>
   <button type="button" data-toggle="modal" data-target="#add_cour" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Cour/TD/TP </button>

         <table id="table" class="table text-center">
                  <thead>
                  <tr>
                      <th scope="col" class="text-primary">Name</th>
                      <th scope="col" class="text-primary">Heure</th>
                      <th scope="col" class="text-primary">Minute</th>
                     
                      <th scope="col" class="text-primary">Options</th>
                      
                      </tr>
                  </thead>
                  <tbody id="sub_entities_table">

                       <tr v-for="cour in courses" :key="cour.id">
                    
                    <td>  {{cour.name }}</td>
                    <td> {{ cour.hour }}</td>
                    <td> {{ cour.min }} </td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                        <button type="button" title="Delete account" class="btn btn-info m-2 btn-sm" ><i class="fa fa-fw fa-plus"></i>Ajouter Responsables</button>
                    </td>
                </tr>


                  </tbody>

              </table>

 <div class="modal fade" id="add_cour">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Cour TD TP</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
             <form @submit.prevent="addCour()">
                      <div class="form-group">
                          <label for="select">Selectioner Nom </label>
                            <select v-model ="cour.name" class="custom-select" name="name" id="select">
                                <option value="Cour" > Cour</option>
                                <option value="TD" > TD</option>
                                <option value="TP" > TP</option>
                            
                              
                            </select>
                      </div>
                      <div class="form-group">
                          <label for="select">Selectioner Exigence </label>
                            <select v-model ="cour.requirementId" class="custom-select" name="requirement" id="select">
                     <option  v-for="requirement in requirements" :key="requirement.id" :value="requirement.id" > {{ requirement.name }}</option>
                              
                            
                              
                            </select>
                      </div>




                      <div class="form-group">
                      <label for="group_name">Heure</label>
                      <input v-model="cour.hour" name="ExamenH" type="number" class="form-control" id="ExamenH" max="4" required>
                  </div>

                   <div class="form-group">
                      <label for="group_name"> Minute</label>
                      <input  v-model="cour.min" name="ExamenMin" type="number" class="form-control" id="ExamenMin" max="59" required>
                  </div>

                  
                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Créer</button>
          </div>
                    
                       
                  </form>
          </div>

          
          

      </div>
  </div>
</div>






    </div>



</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'

import Cours from '../models/cours'


export default{



 computed: mapGetters({
         moduleid:'auth/moduleId',
         token: 'auth/token'
        }),

        data(){

        return{
            cour : new Cours('','','','',''),
            courses :'',
            tds:[],
            requirements:[],
          
            selected:''
           
        };
    },

    methods: {

        addCour(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
          this.cour.module = this.moduleid
          console.log( this.cour.module  +"heere")
          console.log(this.cour.name)


          if(this.cour.name == 'Cour' ){
              console.log('couuuuuuuuuuuuuuuuuuuuuurs')

              axios.post(API_URL + 'admin/addcour', {

                 cour: this.cour  } ,{ headers : headers}
        
      
             ).then((res)=>{
               this.getcours();
        
        

            }).catch((err)=>{
     
      
    });



          }

          else{
/*
              axios.post(API_URL + 'admin/addmodule', {

             module: this.module  } ,{ headers : headers}
        
      
            ).then((res)=>{
           // this.getmodules();
        
        

             }).catch((err)=>{
     
      
                     });*/

          }
         
       
   
      


        },








         getcours(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getcours', { module:this.moduleid} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.courses = res.data;
     
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

        getRequirements(){
                  const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getrequirement', { } ,{ headers : headers}
        
      
    ).then((res)=>{
      this.requirements = res.data;
      
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        }

      







    },
     created() {
      this.getRequirements();
      this.getcours();
    },




}

</script>
