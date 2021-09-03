<template>
    
    <div class="container-fluid bg-custom" style="padding-left: 40px;height:800px ">
  <div class=" p-2 bg-custom">
    <h1 class="m-2">Génénration d'Emploi du temps</h1>
   
  </div>
<div class="container">
  <form @submit.prevent="generate">
    <div class="form-group">
        <label for="planning_name2">Nom d'Emploi</label>
        <input name="planning_name2" type="text" class="form-control" id="planning_name2" required>
    </div>
    <div class="form-group">
        <label for="groups_select">Selectionner Année</label>
         <select v-model ="selected" class="custom-select" name="semester" id="select_emp" @change="getsemesters()">
          <option  v-for="year in years" :key="year.id" :value="year.id" > {{ year.name }}</option>
                            
                              
                          
       
        </select>
    </div>

      <div class="form-group">
        <label for="groups_select">Selectionner Semestre</label>
         <select v-model ="selectSem" class="custom-select" name="semester" id="select_emp" @change="getSections()">
             
          <option  v-for="semester in semesters" :key="semester.id" :value="semester.id" > {{ semester.name }}</option>
                            
                              
          </select>
    </div>

      <div class="form-group">
        <label for="groups_select">Selectionner Section</label>
         <select v-model ="selectSec" class="custom-select" name="semester" id="select_emp" @change="getGroupes()" >
             
          <option  v-for="section in sections" :key="section.id" :value="section.id" > {{ section.name }}</option>
                            
                              
          </select>

       
    </div>

    <div class="form-group">
        <label for="groups_select">Selectionner Groupe</label>
         <select v-model ="selectGrp" class="custom-select" name="semester" id="select_emp"  >
             
          <option  v-for="groupe in groupes" :key="groupe.id" :value="groupe.id" > {{ groupe.name }}</option>
                            
                              
          </select>

       
    </div>





    <div class="form-group row">
        <label for="start" class="col-2 col-form-label">Start :</label>
        <div class="col-10">
            <input class="form-control" v-model="start" type="date" id="start" required>
        </div>
    </div>
    <div class="form-group row">
        <label for="end" class="col-2 col-form-label">End :</label>
        <div class="col-10">
            <input class="form-control" v-model="end" type="date"  id="end" required>
        </div>
    </div>
<h6 id="gen_error" class="text-danger d-none">you need to feel out all fields</h6>
<button class="btn btn-primary"  type="submit"   >Create</button>
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
            selectSec:'',
            selectGrp:'',
            sections:[],
            groupes:[],
            start:'',
            end:'',
           
           


        };
    },
    methods: {

      generate(){

         const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }

axios.post(API_URL + 'admin/makeplanning', {group:this.selectGrp , semester:this.selectSem
,start: this.start , end:this.end } ,{ headers : headers}
        
      
    ).then((res)=>{
     console.log(res.data)
      this.$store.dispatch("auth/savePlanning", {
        planning: res.data
      });

      this.$router.push("/dashboard/planning_view");
      
        

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

        getsemesters(){

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

        getSections(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getsections', { year:this.selected} ,{ headers : headers}
        
      
    ).then((res)=>{
      
     this.sections = res.data
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });



        },








        getGroupes(){

               const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getgroups', { section:this.selectSec} ,{ headers : headers}
        
      
    ).then((res)=>{
        
      this.groupes = res.data;
      
      
        

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
