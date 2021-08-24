<template>
    
    <div>
   <button type="button" data-toggle="modal" data-target="#add_resp" style="float: right" class="btn btn-primary btn-sm "><i class="fa fa-fw fa-plus"></i>Ajouter Responsable </button>

         <table id="table" class="table text-center">
                  <thead>
                  <tr>
                      <th scope="col" class="text-primary">Nom</th>
                      <th scope="col" class="text-primary">Prénom</th>
                      <th scope="col" class="text-primary">Type</th>
                     
                      <th scope="col" class="text-primary">Options</th>
                      
                      </tr>
                  </thead>
                  <tbody id="sub_entities_table">

                  <tr v-for="(responsable,i) in responsables" :key="i">
                    
                    <td>  {{responsable.firstname }} </td>
                    <td> {{ responsable.lastname }}</td>
                    <td> {{ responsable.type}} </td>
                   
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm"><i class="fa fa-fw fa-edit"></i>Éditer</button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i>Supprimer</button>
                        <button type="button" title="Delete account" class="btn btn-info m-2 btn-sm" ><i class="fa fa-fw fa-plus"></i>Ajouter Responsables</button>
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
             <form @submit.prevent="addresponsable">
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






    </div>



</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'


export default{



 computed: mapGetters({
         cour:'auth/cour',
         token: 'auth/token'
        }),

        data(){

        return{
            Enseignants : [],
            responsables : [],
            profId:''
           
           
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
               this.getresponsables();
           
        
        

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
     console.log(res.data)

      
     
      
        

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
          console.log(this.cour)

         

axios.post(API_URL + 'admin/getproflist', {cour : this.cour  } ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log(res.data)
      this.Enseignants = res.data;
      
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        }

      







    },

     created() {
         this.getEnseignants();
    
    },




}

</script>
