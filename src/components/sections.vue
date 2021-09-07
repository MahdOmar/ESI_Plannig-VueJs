<template>
    
    <div>

        <div class="d-flex justify-content-between">
            <h3 class="m-2"> {{ this.yearName }} </h3>

             <button type="button" title="Edit account" data-toggle="modal" data-target="#add_section" style="float: right" class="btn btn-primary btn-sm m-2"><i class="fa fa-fw fa-plus"></i>Ajouter Section </button>

        </div>
        
          <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
               
               
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
              
          

                <tr v-for="section in sections" :key="section.id">
                    
                    <td>  {{section.name }}</td>
                  
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#edit_section"  @click="getSection(section)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click="deletesection(section)"><i class="fa fa-fw fa-trash"></i></button>
                        <button type="button" title="Delete account" class="btn btn-info  btn-sm" @click="saveSection(section)">Gérer</button>
                    </td>
                </tr> 
               




        


            </tbody>
        </table>

        <div class="modal fade" id="add_section">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Créer Nouvelle Section</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addSection"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Section</label>
                      <input v-model="sectionName" name="name" type="text" class="form-control" id="name" required>
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

<!--    Modify Section   -->
<div class="modal fade" id="edit_section">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Section</h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="editSection"  class="text-left">

                  <div class="form-group">
                      <label for="name">Nom du Section</label>
                      <input v-model="sectionNameE.name" name="name" type="text" class="form-control" id="name" required>
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
         sections:'auth/sections'

        }),

        data(){

        return{
            yearName:this.$parent.year.name,
            sectionName:'',
            sectionNameE:'',
           // sections : [],
            yearId:this.$parent.yearId,
             error:'',
            success:''
          
        
           
        };
    },

    methods: {

        addSection(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
       
         
      axios.post(API_URL + 'admin/addsection', {

       year: this.yearId , name:this.sectionName  } ,{ headers : headers}
        
      
    ).then((res)=>{
           this.error = ''
          this.success = "Section ajouté";

        this.getsections();
        
        

    }).catch((err)=>{
         this.success =""
        this.error = err.response.data.error
     
      
    });


        },








         getsections(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getsections', { year:this.yearId} ,{ headers : headers}
        
      
    ).then((res)=>{
      
     this.$store.dispatch("auth/saveSections", {
        sections: res.data
      });
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

           saveSection(section){
  
        this.$store.dispatch('auth/saveSection',{
                section: section
            });

           
        this.$router.push('groupes')
       

    },

   getSection(section){
       this.sectionNameE = Object.assign({},section)
   },

   splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deletesection(section){
      this.splice(this.sections,section)
   }
        






    },
     created() {
      //this.getsections();
    },




}



</script>
