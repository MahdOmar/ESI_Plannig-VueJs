<template>

<div class="m-4">

      <button type="button" title="Edit account" data-toggle="modal" data-target="#add_subrequirement" style="float: right" class="btn btn-primary btn-sm m-2"><i class="fa fa-fw fa-plus"></i>Ajouter les détails des endroits </button>

          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
          
               
                <th scope="col" class="text-primary text-center">Actions</th>
            </tr>
            </thead>

            <tbody>
          

              <tr v-for="subrequirement in subrequirements" :key="subrequirement.id">
                    
                    <td>  {{subrequirement.name }}</td>
                   
                   
                    <td class="text-center">
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_subrequirement"  @click="getSub(subrequirement)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click="deleteSub(subrequirement)"  ><i class="fa fa-fw fa-trash"></i></button>
                       
                    </td>
                </tr>  
               




        


            </tbody>
        </table>

   <div class="modal fade" id="add_subrequirement">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Salle/Amphi</h5>
            
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addSubRequirement"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom </label>
                      <input v-model="subrequirement.name" name="name" type="text" class="form-control" id="name" required>
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
<!--  Modify SubRequirement   -->


<div class="modal fade" id="edit_subrequirement">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Salle/Amphi</h5>
            
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="editSubRequirement"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom </label>
                      <input v-model="subrequirementE.name" name="name" type="text" class="form-control" id="name" required>
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


import SubRequirement from '../models/requirement'
import $ from 'jquery'


export default{



 computed: mapGetters({
    
         token: 'auth/token',
         requirement : 'auth/requirement'
        }),

        data(){

        return{
            subrequirement : new SubRequirement('',''),
            subrequirementE:'',
            subrequirements : [],
             error:'',
            success:''
           
        };
    },

    methods: {

        addSubRequirement(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
       
          
         
       
   
      axios.post(API_URL + 'admin/addsubrequirement', {

 name: this.subrequirement.name, requirement:this.requirement.id  } ,{ headers : headers}
        
      
    ).then((res)=>{

        this.error = ''
          this.success = "Endroit ajouté";
        this.getsubrequirements();

           setTimeout(function(){
      $("#add_subrequirement").modal('hide')
   }, 1 * 1000);
        
        

    }).catch((err)=>{

         this.success =""
        this.error = err.response.data.error
     
      
    });


        },








         getsubrequirements(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getsubrequirements', {requirement:this.requirement.id} ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log('subreqs');
        console.log(res.data)
      this.subrequirements = res.data;
    
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

        getSub(sub){
            this.subrequirementE = Object.assign({},sub)

        },

        splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deleteSub(sub){
      this.splice(this.subrequirements,sub)
   }







    },
     created() {
      this.getsubrequirements();
   
    },




}



</script>
