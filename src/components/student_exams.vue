<template>

 
    <div class="container-fluid bg-custom" style="padding-left: 60px;height:800px ">
        <nav class="navbar shadow  rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand  float-left text-white" href="/" >
           ESI PLANNING
        </a>
       <ul class="nav navbar-nav flex-row float-right">
        <img class="rounded-circle" src="../assets/img/logo.png" style="height=40px; align-self: center;">
          <li class="nav-item">
          
          </li>
        </ul>
      </div>
    </nav>
  <div class=" p-2 bg-custom " style="margin-top:90px">
    <h2 class="m-2">Consultaion d'Emploi du temps d'Examens</h2>
   
  </div>
<div class="container">
  <div class="text-center text-danger">
    <p>{{error}}</p>
  </div>
  <form @submit.prevent="generate">
  
    <div class="form-group">
        <label for="groups_select">Selectionner Année</label>
         <select v-model ="selected" class="custom-select" name="semester" id="select_emp" @change="getsemesters()" required>
          <option  v-for="year in years" :key="year.id" :value="year.id" > {{ year.name }}</option>
                            
                              
                          
       
        </select>
    </div>

      <div class="form-group">
        <label for="groups_select">Selectionner Semestre</label>
         <select v-model ="selectSem" class="custom-select" name="semester" id="select_emp" required >
             
          <option  v-for="semester in semesters" :key="semester.id" :value="semester.id" > {{ semester.name }}</option>
                            
                              
          </select>
    </div>

     <div class="form-group">
        <label for="groups_select">Selectionner EMD</label>
         <select v-model ="selectEmd" class="custom-select" name="semester" id="select_emp" required>
             <option value="EMD1">EMD1</option>
              <option value="EMD2">EMD2</option>
        
                              
          </select>
    </div>

     
    


   <button class="btn btn-primary"  type="submit"  >Consulter</button>
</form>

</div>

    </div>

</template>

<script>

import axios from 'axios'
import {mapGetters} from 'vuex'
export default  {
    computed: mapGetters({
         token:'auth/token',
        // semesterid:'auth/semesterId'
        }),

    data(){

        return{
            years : [],
            semesters:[],
            yearId:null,
            selected:'',
            selectSem:'',
            selectEmd:'',
            dateD:'',
            dateE:'',
            radio:'',
            error:''

           
            
          
          
           
           


        };
    },
    methods: {

      generate(){

         const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/makeexams', {semester:this.selectSem, emd:this.selectEmd , start:this.dateD , 

 end: this.dateE , samdi:this.radio} ,{ headers : headers}
        
      
    ).then((res)=>{
     console.log(res.data)
      this.$store.dispatch("auth/savePlanning", {
        planning: res.data
      });

      this.$router.push('/dashboard/all_exams')
      
        

    }).catch((err)=>{
        console.log(err.message);
        this.error = err.response.data.error;
     
      
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

        getsemesters(){
         
          this.semesters="";
         

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/getsemesters', { yearid:this.selected} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.semesters = res.data;
      console.log(this.semesters)
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },


        


        getYearId(year){
        this.yearId = year.id
       

    },



    },

    




    created() {
      this.getyears();
    },
}





</script>
