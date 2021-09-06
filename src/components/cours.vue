<template>
    
    <div>
        <div class="d-flex justify-content-between">
            <h4>Module:  {{moduleid.name}}</h4>
   <button type="button" data-toggle="modal" data-target="#add_cour" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Cours/TD/TP </button>
</div>
         <table id="table" class="table text-center">
                  <thead>
                  <tr>
                      <th scope="col" class="text-primary">Nom</th>
                      <th scope="col" class="text-primary">Durée de Séance</th>
                     
                     
                      <th scope="col" class="text-primary">Options</th>
                      
                      </tr>
                  </thead>
                  <tbody id="sub_entities_table">

                       <tr v-for="(cour,i) in courses" :key="i">
                    
                    <td>  {{cour.name }} </td>
                    <td v-if="cour.min == 0"> {{cour.hour }}h </td> 
                    <td v-else>{{ cour.hour }}h{{ cour.min }}min</td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"  data-toggle="modal" data-target="#edit_cour"  @click="getCour(cour)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"   @click="deletecour(cour)" ><i class="fa fa-fw fa-trash"></i></button>
                        <button type="button" title="Delete account" class="btn btn-info  btn-sm" @click="saveCour(cour)" >Gérer</button>
                    </td>
                </tr>

                 <tr v-for="(td,i) in tds" :key="'A'+i">
                    
                    <td>  {{td.name }}</td>
                       <td v-if="td.min == 0"> {{td.hour }}h </td> 
                    <td v-else>{{ td.hour }}h{{ td.min }}min</td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_cour"  @click="getCour(td)"  ><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click="deletecour(td)"  ><i class="fa fa-fw fa-trash"></i></button>
                        <button type="button" title="Delete account" class="btn btn-info  btn-sm" @click="saveCour(td)" >Gérer</button>
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
               <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>
               </div>
              


             <form @submit.prevent="addCour()" class="text-left">
                      <div class="form-group">
                          <label for="select">Selectioner Nom </label>
                            <select v-model ="cour.name" class="custom-select" name="name" id="select">
                                <option value="Cours" > Cours</option>
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




                      <div class="form-group row">
                          <div class="col-md-6">
                            <label for="group_name">Heure</label>
                      <input v-model="cour.hour" name="ExamenH" type="number" class="form-control" id="ExamenH" max="4" required>
                  


                          </div>
                          <div class="col-md-6">
                              <label for="group_name"> Minute</label>
                      <input  v-model="cour.min" name="ExamenMin" type="number" class="form-control" id="ExamenMin" max="59" required>
              

                          </div>
                    
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

<!--    Modify cours       -->

 <div class="modal fade" id="edit_cour">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Cour TD TP</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
               <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>
               </div>
              


             <form @submit.prevent="editCour()"  class="text-left">
                      <div class="form-group">
                          <label for="select">Selectioner Nom </label>
                            <select v-model ="courE.name" class="custom-select" name="name" id="select">
                                <option value="Cours" > Cours</option>
                                <option value="TD" > TD</option>
                                <option value="TP" > TP</option>
                            
                              
                            </select>
                      </div>
                      <div class="form-group">
                          <label for="select">Selectioner Exigence </label>
                            <select v-model ="courE.requirementId" class="custom-select" name="requirement" id="select">
                     <option  v-for="requirement in requirements" :key="requirement.id" :value="requirement.id" > {{ requirement.name }}</option>
                              
                            
                              
                            </select>
                      </div>




                      <div class="form-group">
                      <label for="group_name">Heure</label>
                      <input v-model="courE.hour" name="ExamenH" type="number" class="form-control" id="ExamenH" max="4" required>
                  </div>

                   <div class="form-group">
                      <label for="group_name"> Minute</label>
                      <input  v-model="courE.min" name="ExamenMin" type="number" class="form-control" id="ExamenMin" max="59" required>
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
import $ from 'jquery'


export default{



 computed: mapGetters({
         moduleid:'auth/moduleId',
         token: 'auth/token'
        }),

        data(){

        return{
            cour : new Cours('','','','','',''),
            courE:'',
            courses :'',
            module:'',
            tds:[],
            requirements:[],
            success:'',
          
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


       
           

              axios.post(API_URL + 'admin/add', {

                 cour: this.cour  } ,{ headers : headers}
        
      
             ).then((res)=>{
                 if(this.cour.name == "Cours"){
                     this.success ='Cours Ajouté'

                 }
                else if(this.cour.name == "TD"){
                     this.success ='TD Ajouté'

                 }
               else  if(this.cour.name == "TP"){
                     this.success ='TP Ajouté'

                 }
                 


               this.getcours();
               this.getTds();

               setTimeout(function(){
      $("#add_cour").modal('hide')
   }, 1 * 1000);

        
        

            }).catch((err)=>{
     
      
    });



          

          
         
       
   
      


        },
        editCour(){
            console.log(this.courE.name)


        },








         getcours(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getcours', { module:this.moduleid.id} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.courses = res.data;

       this.courses.forEach(cour => {
           cour.type = 0
          
      });
     
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

         getTds(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/gettdp', { module:this.moduleid.id} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.tds = res.data;
      this.tds.forEach (td =>{
          td.type = 1

      });
     
      
        

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



        },

        saveCour(cour){
            console.log(cour)

            
        this.$store.dispatch('auth/saveCour',{
                cour: cour
            });

           
        this.$router.push('responsables')
        },

        getCour(cour){
            this.courE = Object.assign({},cour) 
            if(this.courE.name.includes("Cours"))
            {
                this.courE.name = "Cours"
            }
            else if(this.courE.name.includes("TD")){
                this.courE.name = "TD"
            }
            else{
                this.courE.name = "TP"

            }
            



        },

        splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deletecour(cour){
      
      this.splice(this.courses,cour)
      this.splice(this.tds,cour)
   }

      







    },
     created() {
         console.log(this.moduleid.id)
      this.getRequirements();
      this.getcours();
      this.getTds();
    },




}

</script>
