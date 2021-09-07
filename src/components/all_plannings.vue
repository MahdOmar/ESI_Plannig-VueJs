<template>
    
 <div class="container-fluid " style="padding-left: 40px; ">
  <div class=" p-2 ">
    <h2>Gestion des Emplois du temps</h2>
   
   

    	
    
  </div>
  <div class="row">
    <div class="col-md-3 p-2 shadow text-center">
     <table class="table table-bordered table-hover text-center">
         <thead>
         <tr><th class="bg-primary text-white font-weight-bold">Années</th></tr>
         </thead>
         <tbody id="groups">
      
             <tr v-for="year in years" :key="year.id"> 
                 <td @click="getYearId(year)"> <a  class=" custom text-center"> {{ year.name }}</a>   </td> </tr>
                 
                 
                
            
         


         </tbody>
     </table>
     

    </div>
      <div id="view" class="col-md-8 shadow p-1 m-4">
          <div class="container-fluid text-center overflow-auto " style="height: 600px  ">

              <table class="table bg-white">
            <thead class="">
            <tr>
                <th scope="col" class="text-primary">Nom</th>
               
               
               
                <th scope="col" class="text-primary">Actions</th>
            </tr>
            </thead>

            <tbody>
              
          

               <tr v-for="planning in plannings" :key="planning.id">
                    
                    <td>  {{planning.name }}</td>
                  
                    <td>
                        <button type="button" title="Edit account" class="btn btn-primary btn-sm" @click="viewPlanning(planning)"><i class="fa fa-fw fa-edit"></i></button>
                        <button type="button" title="Delete account" class="btn btn-danger btn-sm"><i class="fa fa-fw fa-trash"></i></button>
                      
                    </td>
                </tr> 
            




        


            </tbody>
        </table>


             
            
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
     

        }),

        data(){

        return{
            yearId:'',
            years:[],
            plannings:[]
           
            
          
        
           
        };
    },

    methods: {

        getPlannings(){

             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getPlannings', { yearId:this.yearId } ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log(res.data)
      this.plannings = res.data;
      
        

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
            this.getPlannings();


        },

        viewPlanning(planning){
             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getPlanning', { planningId:planning.id } ,{ headers : headers}
        
      
    ).then((res)=>{
     
             this.$store.dispatch("auth/savePlanning", {
        planning: res.data
      });
     this.$router.push("/dashboard/planning_view");


      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        
        }




         

        






    },
     created() {
      this.getyears();
      
    },




}



</script>
