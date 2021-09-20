<template>
    
 <div class="container-fluid " style="padding-left: 60px; ">
  <div class=" p-2 ">
    <h2>Gestion des Emplois du temps d'Examens</h2>
   
   

    	
    
  </div>
  <div class="row">
    <div class="col-md-3 p-2 shadow text-center">
    
     <table class="table table-bordered table-hover text-center">
         <thead>
         <tr><th class="bg-primary text-white font-weight-bold">Années</th></tr>
         </thead>
         <tbody id="groups">
      
             <tr v-for="year in years" :key="year.id"> 
                 <td class="year" :class="{active:year.id == active}"  @click="getYearId(year)"> <a  class=" custom text-center"> {{ year.name }}</a>   </td> </tr>
                 
                 
                
            
         


         </tbody>
     </table>
     

    </div>
      <div id="view" class="col-md-8 shadow p-1 m-4">
          <div class="container-fluid text-center overflow-auto " style="height: 600px  ">
                  <p v-if="!child" style="margin-top:150px">Selectionner une année pour voir ses emplois du temps</p>

              <table v-if="child"  class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
               
               
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
              
          

            
             <tr v-for="exam in exams" :key="exam.id">
               <td>  {{exam.name }}</td>
               <button type="button" title="Edit account" class="btn btn-primary btn-sm m-1" @click="viewExam(exam)"><i class="fa fa-fw fa-edit"></i></button>
               <button type="button" title="Spprimer emlpoi du temps" class="btn btn-danger btn-sm m-1" ><i class="fa fa-fw fa-trash"></i></button>
                  <button type="button" title="Envoyer email au groupe" class="btn btn-secondary btn-sm m-1" @click="sendMail(exam)"><i class="far fa-envelope"></i></button>
                        


             </tr>


        


            </tbody>
        </table>


             
            
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
import Swal from 'sweetalert2'
import $ from 'jquery'



export default{



 computed: mapGetters({
    
         token: 'auth/token',
     

        }),

        data(){

        return{
            yearId:'',
            years:[],
            active:undefined,
            child:false,
         
            exams:[],
            error:'',
           
            
          
        
           
        };
    },

    methods: {

      deleteExam(planning){
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

                  axios.post(API_URL + 'admin/deleteplanning', { id:planning.id

             } ,{ headers : headers}
        
      
    ).then((res)=>{
          this.error = ''
          this.success = "Enseignant Supprimé";
          
        this.getExams();
      
        
        

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


        getExams(){

             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getexamsplannings', { year:this.yearId } ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log(res.data)
      this.exams = res.data;
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        },





         getyears(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getyears', { } ,{ headers : headers}
        
      
    ).then((res)=>{
      this.years = res.data;
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     

        },


        getYearId(year){
            this.yearId = year.id
             this.active = year.id
            this.child = true
         
            this.getExams();


        },

     
        viewExam(exam){
            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getexamplanning', { id:exam.id } ,{ headers : headers}
        
      
    ).then((res)=>{
     
             this.$store.dispatch("auth/savePlanning", {
        planning: res.data
      });
     this.$router.push("/dashboard/exam_view");


      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     





        },
          sendMail(planning){
           const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/mail', { id:planning.id , type:1 } ,{ headers : headers}
        
      
    ).then((res)=>{
     
            

    }).catch((err)=>{
        console.log(err.message);
     
      
    });

    
     





        },




         

        






    },
     created() {
      this.getyears();
      
    },




}



</script>
