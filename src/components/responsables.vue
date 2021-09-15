<template>
    
    <div >
        <div class="d-flex justify-content-between">
              <h4 class="m-2">  {{cour.name}}</h4>
            <button type="button" data-toggle="modal" data-target="#add_resp" style="float: right" class="btn btn-primary btn-sm  m-2"><i class="fa fa-fw fa-plus"></i>Ajouter Responsable </button>


        </div>
   
         <table id="table" class="table text-center">
                  <thead>
                  <tr>
                      <th scope="col" class="text-primary">Responsable</th>
                     
                      <th scope="col" class="text-primary">Type</th>
                     
                      <th scope="col" class="text-primary">Options</th>
                      
                      </tr>
                  </thead>
                  <tbody id="sub_entities_table">

                  <tr v-for="(responsable,i) in responsables" :key="i">
                    
                    <td>  {{responsable.user.firstname }} {{ responsable.user.lastname }}</td>
                   
                    <td> {{ responsable.user.type}} </td>
                   
                    <td>
                       
                        <button type="button" title="Supprimer responsable" class="btn btn-danger btn-sm" @click=" deleteresp(responsable)"><i class="fa fa-fw fa-trash"></i></button>
                    
                    </td>
                </tr> 

               


                


                  </tbody>

              </table>

 <div class="modal fade" id="add_resp">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Ajouter Responsable </h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>
               </div>



             <form @submit.prevent="addresponsable"  class="text-left">
                      <div class="form-group">
                          <label for="select">Selectioner Nom </label>
                            <select v-model ="profId" class="custom-select" name="requirement" id="select">
                     <option  v-for="enseignant in Enseignants" :key="enseignant.id" :value="enseignant.id" > {{enseignant.firstname }}  {{ enseignant.lastname}}</option>
                            
                              
                            </select>
                      </div>
                
                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Ajouter</button>
          </div>
                    
                       
                  </form>
          </div>

          
          

      </div>
  </div>
</div>

<!--   Modify responsable    -->

 <div class="modal fade" id="edit_resp">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Editer Responsable </h5>
             
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <div class="row justify-content-center">
                      <div v-if="success" class="text-success text-center m-2 col-md-4">
                         <p> {{ success }}</p>

                    </div>
               </div>



             <form @submit.prevent="editresponsable"  class="text-left">
                      <div class="form-group">
                          <label for="select">Selectioner Nom </label>
                            <select v-model ="profE" class="custom-select" name="requirement" id="select">
                                <option disabled >{{profE}}</option>
                     <option  v-for="enseignant in Enseignants" :key="enseignant.id" :value="enseignant.id" > {{enseignant.firstname }}  {{ enseignant.lastname}}</option>
                            
                              
                            </select>
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

  <div class="modal" id="delete">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body text-center text-danger">
        {{ error }}
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
      
      </div>

    </div>
  </div>
</div>












    </div>



</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import $ from 'jquery'
import Swal from 'sweetalert2'


export default{



 computed: mapGetters({
         cour:'auth/cour',
         token: 'auth/token'
        }),

        data(){

        return{
            Enseignants : [],
            responsables : [],
            profId:'',
            profE:'',
            success:'',
            error:'',
           
           
        };
    },

    methods: {

        addresponsable(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         
          


              axios.post(API_URL + 'admin/addresponsable', {

                 type: this.cour.type, userId:this.profId , targetId:this.cour.id  } ,{ headers : headers}
        
      
             ).then((res)=>{
                 this.success = "Responsable Ajouté"
               this.getresponsables();
               
               setTimeout(function(){
                $("#add_resp").modal('hide')
               }, 1 * 1000);
           
        
        

            }).catch((err)=>{
     
      
    });



          

          
         
       
   
      


        },

        editresponsable(){

             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         
          


              axios.post(API_URL + 'admin/editresponsable', {

                 type: this.cour.type, userId:this.profId , targetId:this.cour.id  } ,{ headers : headers}
        
      
             ).then((res)=>{
                 this.success = "Responsable Edité"
               this.getresponsables();
               
               setTimeout(function(){
                $("#edit_resp").modal('hide')
               }, 1 * 1000);
           
        
        

            }).catch((err)=>{
     
      
    });



          

          
         
       
   
      


        },








         getresponsables(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getresponsables', {  type: this.cour.type,  targetId:this.cour.id} ,{ headers : headers}
        
      
    ).then((res)=>{
     console.log("Responsables : "+res.data)
     this.responsables = res.data

      
     
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

 

        getEnseignants(){
                  const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
        //  console.log(this.cour)

         

axios.post(API_URL + 'admin/getproflist', { type: this.cour.type,  targetId:this.cour.id  } ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log("ProfList: "+res.data)
      this.Enseignants = res.data;
      
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        },

        getProf(responsable){
            this.profE = responsable.firstname+' '+responsable.lastname
            console.log(this.profE)
            


        },

        splice(arr, val) {
         for (var i = arr.length; i--;) {
         if (arr[i] === val) {
            arr.splice(i, 1);
    }
  }
},

   deleteresp(resp){
        const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
          Swal.fire({
            title: 'Vous etes sur?',
            text: "Vous ne pourrez pas revenir en arrière !",
            type: 'Alerte',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Oui, supprimer!'
        }).then((result) => {
            if (result.value) {
              console.log(resp)

                  axios.post(API_URL + 'admin/deleteresponsable', { id:resp.id , type:this.cour.type

             } ,{ headers : headers}
        
      
    ).then((res)=>{
          this.error = ''
          this.success = "Enseignant Supprimé";
          
        this.getresponsables();
        console.log('im heeeeeeeeeeere')
      
        
        

    }).catch((err)=>{
        this.success =""
        console.log('im heeeeeeeeeeere 222222222222222222222222222222')
        this.error = err.response.data.error
        $("#delete").modal('show')
      
        setTimeout(function(){
      $("#delete").modal('hide')
      
      
   }, 1 * 4000);
     // console.log(err.response.data)
        
     
      
    });

               

            }
        })
     



   }



      







    },

     created() {
         this.getEnseignants();
         this.getresponsables();
    
    },




}

</script>
