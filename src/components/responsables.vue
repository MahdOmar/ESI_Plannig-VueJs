<template>
    
    <div>
   <button type="button" data-toggle="modal" data-target="#add_resp" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Responsable </button>

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
                    
                    <td>  {{responsable.firstname }} {{ responsable.lastname }}</td>
                   
                    <td> {{ responsable.type}} </td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"  data-toggle="modal" data-target="#edit_resp"  @click="getProf(responsable)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm" @click=" deleteresp(responsable)"><i class="fa fa-fw fa-trash"></i></button>
                    
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
              <button type="submit" class="btn btn-primary"  >Créer</button>
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



             <form @submit.prevent="addresponsable"  class="text-left">
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






    </div>



</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import $ from 'jquery'


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
            success:''
           
           
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
      this.splice(this.responsables,resp)
   }



      







    },

     created() {
         this.getEnseignants();
         this.getresponsables();
    
    },




}

</script>
