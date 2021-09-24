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

      
    <h2 class="m-2">Consultation d'Emploi du temps Semestrielle</h2>
   
  </div>
<div class="container">
  <div class="text-center text-danger">
    <p v-if="error">{{error}}</p>
  </div>
  
  <form @submit.prevent="getPlanning()">
  
    <div class="form-group">
        <label for="groups_select">Selectionner Année</label>
         <select v-model ="selected" class="custom-select" name="semester" id="select_emp" @change="getsemesters()" required>
          <option  v-for="year in years" :key="year.id" :value="year.id" > {{ year.name }}</option>
                            
                              
                          
       
        </select>
    </div>

      <div class="form-group">
        <label for="groups_select">Selectionner Semestre</label>
         <select v-model ="selectSem" class="custom-select" name="semester" id="select_emp" @change="getSections()" required>
             
          <option  v-for="semester in semesters" :key="semester.id" :value="semester.id" > {{ semester.name }}</option>
                            
                              
          </select>
    </div>

      <div class="form-group">
        <label for="groups_select">Selectionner Section</label>
         <select v-model ="selectSec" class="custom-select" name="semester" id="select_emp" @change="getGroupes()" required >
             
          <option  v-for="section in sections" :key="section.id" :value="section.id" > {{ section.name }}</option>
                            
                              
          </select>

       
    </div>

    <div class="form-group">
        <label for="groups_select">Selectionner Groupe</label>
         <select v-model ="selectGrp" class="custom-select" name="semester" id="select_emp" required >
             
          <option  v-for="groupe in groupes" :key="groupe.id" :value="groupe.id" > {{ groupe.name }}</option>
                            
                              
          </select>

       
    </div>



   <button class="btn btn-primary"  type="submit"  >Consulter</button>
</form>

</div>
<!--    Modal Succes       -->













    </div>




</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'
import $ from 'jquery'
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
            selectSec:'',
            selectGrp:'',
            succes:'',
            sections:[],
            groupes:[],
            error:'',
            planning:''
           
           


        };
    },
    methods: {

        getyears(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'getyears'
        
      
    ).then((res)=>{
      this.years = res.data;
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     

        },

        getsemesters(){
          this.groupes ='';
          this.semesters="";
          this.sections=''

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'getsemesters', { yearid:this.selected} 
        
      
    ).then((res)=>{
      this.semesters = res.data;
      console.log(this.semesters)
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },

        getSections(){
          this.sections=''
          this.groupes=''

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'getsections', { year:this.selected} 
        
      
    ).then((res)=>{
      
     this.sections = res.data
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        },








        getGroupes(){
          this.groupes = ''

               const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'getgroups', { section:this.selectSec} 
        
      
    ).then((res)=>{
        
      this.groupes = res.data;
      
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });





        },
        


        getYearId(year){
        this.yearId = year.id
       

    },

    getPlanning()
    {

          const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

        

            axios.post(API_URL + 'getoneplannings', { semester:this.selectSem , group:this.selectGrp} 
        
      
    ).then((res)=>{
      this.planning = res.data
      console.log(res)
      this.getPlanningDetails();
        

   
        

    }).catch((err)=>{
        console.log(err.message);
        this.error = 'Pas de planning pour ce groupe'
     
      
    });


          




    },

    getPlanningDetails(){
      const API_URL = 'http://127.0.0.1:4000/';

      console.log("Id planning"+this.planning.id)

       axios.post(API_URL + 'getplanning', { planningId: this.planning.id} 
      ).then((res)=>{

          this.$store.dispatch("auth/savePlanning", {
        planning: res.data
      });
     this.$router.push("/student_planning_view");



      }).catch((err)=>{
       
     
      
    });



    }

    },

    




    created() {
      this.getyears();
    },
}



</script>
