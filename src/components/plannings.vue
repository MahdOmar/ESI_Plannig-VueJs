<template>
    
<div id="view" class=" p-1 m-4">
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
                     <button type="button" title="Edit account" class="btn btn-primary btn-sm" @click="viewPlanning(planning)"><i class="fas fa-eye"></i></button>
                      
                       
                    </td>

                  
                </tr> 
            




        


            </tbody>
        </table>


             
            
          </div>
      </div>



</template>

<script>
import {mapGetters} from 'vuex'

import axios from 'axios'
export default {
   


        
        computed: mapGetters({
          user:'auth/user',
          token:'auth/token'
        }),

         data() {
    return {
      plannings:[],
      
    };
  },

        methods :{
          logout(){

            this.$store.dispatch('auth/logout');
             this.$router.push( '/' ) 



          },

           getPlannings(){

             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'prof/getplannings', { id:this.user.id } ,{ headers : headers}
        
      
    ).then((res)=>{
        console.log(res.data)
      this.plannings = res.data;
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        },

         viewPlanning(planning){
             const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'prof/getplanning', { planningId:planning.id } ,{ headers : headers}
        
      
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
        created(){
    
       this.getPlannings();
        
        
        }
      







};




</script>
