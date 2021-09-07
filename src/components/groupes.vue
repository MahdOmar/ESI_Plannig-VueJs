<template>
    
    <div>

        <div class="d-flex justify-content-between">
        <h3 class="m-2"> {{ this.yearName }} {{ this.section.name }} </h3>

        <button type="button" title="Edit account" data-toggle="modal" data-target="#add_groupe" style="float: right" class="btn btn-primary btn-sm m-2"><i class="fa fa-fw fa-plus"></i>Ajouter Groupe </button>

        </div>
        
          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
               
               
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
          

               <tr v-for="groupe in groupes" :key="groupe.id">
                    
                    <td>  {{groupe.name }}</td>
                  
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_groupe"  @click="getGroupe(groupe)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click="deletegroupe(groupe)"><i class="fa fa-fw fa-trash"></i></button>
                     
                    </td>
                </tr> 
               




        


            </tbody>
        </table>

        <div class="modal fade" id="add_groupe">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouveau Groupe</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addGroupe"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Groupe</label>
                      <input v-model="groupeName" name="name" type="text" class="form-control" id="name" required>
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


<!-- Modify Group-->


  <div class="modal fade" id="edit_groupe">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Groupe</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="editGroupe"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Groupe</label>
                      <input v-model="groupeNameE.name" name="name" type="text" class="form-control" id="name" required>
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




export default{



 computed: mapGetters({
    
         token: 'auth/token',
         section: 'auth/section'
        }),

        data(){

        return{
            yearName:this.$parent.year.name,
            groupeName:'',
            groupeNameE:'',
            groupes : [],
              error:'',
            success:''
          
        
           
        };
    },

    methods: {

        addGroupe(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         
         
       
   
      axios.post(API_URL + 'admin/addgroup', {

       section: this.section.id, name:this.groupeName   } ,{ headers : headers}
        
      
    ).then((res)=>{
         this.error = ''
          this.success = "Groupe ajouté";
        this.getgroupes();
        
        

    }).catch((err)=>{
       this.success =""
        this.error = err.response.data.module
     
      
    });


        },








         getgroupes(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getgroups', { section:this.section.id} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.groupes = res.data;
      
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

        getGroupe(groupe){
            this.groupeNameE = Object.assign({},groupe)
        },

        splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deletegroupe(groupe){
      this.splice(this.groupes,groupe)
   }


        






    },
     created() {
     this.getgroupes();
    },




}



</script>
