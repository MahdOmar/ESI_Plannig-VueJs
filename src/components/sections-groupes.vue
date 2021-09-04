<template>
    
<div class="container-fluid " style="padding-left: 40px; ">
  <div class=" p-2 ">
    <h1>Gestion des Sections/Groupes</h1>
    <p>Ici, vous pouvez ajouter, modifier et supprimer les sections et les groupes</p>
   

    	
    
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

             
              <router-view/>
          </div>
      </div>
  </div>











    </div>


</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
export default  {
    computed: mapGetters({
         token:'auth/token',
         semesterid:'auth/semesterId'
        }),

    data(){

        return{
            years : [],
            semesters:[],
            yearId:null,
            selected:'',
            sections:[]
           


        };
    },
    methods: {
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

        getsemesters(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getsemesters', { yearid:this.yearId} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.semesters = res.data;
      console.log(this.semesters)
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
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
      
     this.sections = res.data

     console.log(this.sections)

     this.$store.dispatch("auth/saveSections", {
        sections: this.sections
      });
     
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },





        saveId(){
            
            const selectedId = this.selected
            

            this.$store.dispatch('auth/saveId',{
                semesterId: selectedId
            });

         


           
         //   this.$router.push('entities/modules')
        },


      








        getYearId(year){
        this.yearId = year.id
           this.getsections();
        const path = "/dashboard/sections-groupes/sections"
if (this.$route.path !== path) this.$router.push(path)
       

    },



    },

    




    created() {
      this.getyears();
    },
}




</script>
