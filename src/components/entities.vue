<template>
    
<div class="container-fluid bg-custom" style="padding-left: 40px; ">
  <div class="jumbotron p-2 bg-custom">
    <h1>Gestion des Modules</h1>
    <p>Ici, vous pouvez ajouter, modifier et supprimer les modules</p>
    	
    
  </div>
  <div class="row">
    <div class="col-md-3 p-2 shadow text-center">
     <table class="table table-bordered table-hover text-center">
         <thead>
         <tr><th class="bg-primary text-white font-weight-bold">Années</th></tr>
         </thead>
         <tbody id="groups">
      
             <tr v-for="year in years" :key="year.id"> 
                 <td @click="getYearId(year);getsemesters()"> <a  class="text-center" data-target="#semesters" data-toggle="modal"> {{ year.name }}</a>   </td> </tr>
                 
                 
                
            
         


         </tbody>
     </table>
     

    </div>
      <div id="view" class="col-md-8 shadow p-1 m-4">
          <div class="container-fluid text-center " style="height: 400px  ">

             
              <router-view/>
          </div>
      </div>
  </div>



<div class="modal fade" id="add_entity">
  <div class="modal-dialog modal-md">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Create new entity</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <form @submit.prevent="addModule">

                  <div class="form-group">
                      <label for="name">Nom du Module</label>
                      <input name="name" type="text" class="form-control" id="name" required>
                  </div>
                  <div class="form-group">
                      <label for="coef">Coeffition</label>
                      <input name="coef" type="number" class="form-control" id="coef" required>
                  </div>
                  <div class="form-group">
                      <label for="group_name">Examen Heure</label>
                      <input name="complexity" type="number" class="form-control" id="complexity" max="4" required>
                  </div>

                   <div class="form-group">
                      <label for="group_name">Examen Minute</label>
                      <input name="complexity" type="number" class="form-control" id="complexity" max="59" required>
                  </div>



                  <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
              <button type="submit" class="btn btn-primary"  >Créer</button>
          </div>
                     

              </form>
          </div>

          <!-- Modal footer -->
          

      </div>
  </div>
</div>
<div class="modal fade" id="sub_entity">
  <div class="modal-dialog modal-lg">
      <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
              <h5 class="modal-title">Sub entities</h5>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
              <div id="model_body"></div>
              <table id="table" class="table text-center">
                  <thead>
                  <tr>
                      <th class="bg-primary text-white font-weight-bold">Sub-Entity name</th>
                      <th class="bg-primary text-white font-weight-bold">Duration</th>
                      <th class="bg-primary text-white font-weight-bold">Complexity</th>
                      <th class="bg-primary text-white font-weight-bold">Number of employees</th>
                      <th class="bg-primary text-white font-weight-bold">Options</th></tr>
                  </thead>
                  <tbody id="sub_entities_table">

                  </tbody>

              </table>

              <button class="btn btn-primary btn-sm text-center text-white m-2" data-toggle="collapse" data-target="#add_new_sub">Add Sub-Entity</button>

             <br> <div id="add_new_sub" class="collapse">
                  <form method="POST" action="">
                      <div class="form-group">
                          <label for="entity_name">Sub-Entity Name</label>
                          <input name="entity_name" type="text" class="form-control" id="sub_entity_name" required>
                      </div>
                      <label for="time">Duration</label>
                      <div id="time" class=" d-flex">
                          <input name="hour" min="0" value="00" max="12"   type="number" class="form-control" id="hour" required>
                          <p> &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp; </p>
                          <input name="min" min="0" value="00" max="59" type="number" class="form-control" id="min" required>
                      </div>
                      <div class="form-group">
                          <label for="complexity">Complexity</label>
                          <input name="complexity" min="1" type="number" value="1" class="form-control" id="complexity_sub" required>
                          <label for="repetition">Repetition</label>
                          <input name="repetition" min="1" type="number"  value="1" class="form-control" id="repetition" required>
                          <label for="nb_emp">Number of employees</label>
                          <input name="nb_emp" min="1" type="number"  value="1"  class="form-control" id="nb_emp" required>
                      </div>
                       <h6 id="sub_entity_error" class="text-danger d-none">you need to feel out all fields</h6>
                  </form>
                  <button class="btn btn-primary btn-sm text-center text-white m-2"  data-target="#add_new_sub" onclick="create_sub_entity()">Confirm</button>
              </div>

          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
              <button type="submit" class="btn btn-primary" data-dismiss="modal" >Ok</button>
          </div>

      </div>
  </div>
</div>
<div class="modal fade" id="responsibles">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Responsible</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div id="model_body"></div>
                <table id="table2" class="table text-center">
                    <thead>
                    <tr>
                        <th class="bg-primary text-white font-weight-bold">FirstName</th>
                        <th class="bg-primary text-white font-weight-bold">LastName</th>
                        <th class="bg-primary text-white font-weight-bold">Options</th></tr>
                    </thead>
                    <tbody id="users_table">

                    </tbody>

                </table>

                <button class="btn btn-primary btn-sm text-center text-white m-2" data-toggle="collapse" data-target="#new_respo">Add responsible</button>

               <br> <div id="new_respo" class="collapse">
                    <form method="POST" action="">
                        <div class="form-group">
                            <label for="select">Choose a employee</label>
                            <select class="custom-select" name="" id="select_emp">
                                <option value="0" selected>Select one</option>
                          
                                    <option value="<%=users[i].id%>"  ></option>
                              
                            </select>
                        </div>
                    </form>
                    <button class="btn btn-primary btn-sm text-center text-white m-2" data-toggle="collapse" data-target="#add_new_sub" onclick="create_respo()">Confirm</button>
                </div>

            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-dismiss="modal" >Ok</button>
            </div>

        </div>
    </div>
</div>

<!--         Semester modal              -->


<div class="modal fade" id="semesters">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h5 class="modal-title">Semester</h5>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div id="model_body"></div>
              



               <br> <div >
                    <form @submit.prevent="getModules">
                        <div class="form-group">
                            <label for="select">Selectioner Semester </label>
                            <select class="custom-select" name="semester" id="select_emp">
                                <option v-for="semester in semesters" :key="semester.id" :value="semester.id" > {{ semester.name }}</option>
                            
                              
                            </select>
                        </div>
                         <button class="btn btn-primary btn-sm text-center text-white m-2" type="submit">Confirmer</button>
                         <button class="btn btn-primary btn-sm text-center text-white m-2" data-dismiss="modal" >Anuller</button>
                    </form>
                   
                </div>

            </div>

            <!-- Modal footer -->
         

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
         token:'auth/token'
        }),

    data(){

        return{
            years : [],
            semesters:[],
            yearId:null

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


        getmodules(){

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









        getYearId(year){
        this.yearId = year.id
       

    },



    },

    




    created() {
      this.getyears();
    },
}




</script>
