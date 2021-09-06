<template>
  <div class="container-fluid" style="padding-left: 40px">
    <div class="p-2">
      <h2>Gestion des Modules</h2>
     
    </div>
    <div class="row">
      


      <div class="col-md-3 p-2 shadow text-center">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="bg-primary text-white font-weight-bold">Années</th>
            </tr>
          </thead>
          <tbody id="groups">
            <tr v-for="year in years" :key="year.id">
              <td
                @click="
                  getYearId(year);
                  getsemesters();
                "
              >
                <a class="custom" data-target="#semesters" data-toggle="modal">
                  {{ year.name }}</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="view" class="col-md-8 shadow p-1 m-4">
        <div
          class="container-fluid text-center overflow-auto"
          style="height: 600px"
        >
          <router-view />
        </div>
      </div>
    </div>

    <!--         Semester modal              -->

    <div class="modal fade" id="semesters" ref="sem">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Selectionner Semester</h5>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div id="model_body"></div>

           
            <div>
              <form @submit.prevent="saveId">
                <div class="form-group">
                
                  <select
                    v-model="selected"
                    class="custom-select"
                    name="semester"
                    id="select_emp"
                  >
                    <option
                      v-for="semester in semesters"
                      :key="semester.id"
                      :value="semester.id"
                    >
                      {{ semester.name }}
                    </option>
                  </select>
                </div>
                <button
                  class="btn btn-primary btn-sm text-center text-white m-2"
                  type="submit"  
                >
                  Confirmer
                </button>
                <button
                  class="btn btn-primary btn-sm text-center text-white m-2"
                  data-dismiss="modal"
                >
                  Annuler
                </button>
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
import axios from "axios";
import { mapGetters } from "vuex";
import $ from 'jquery'


import modules from './modules.vue';
export default {
  components: { modules },
  computed: mapGetters({
    token: "auth/token",
    semesterid: "auth/semesterId",
  }),

  data() {
    return {
      years: [],
      semesters: [],
      yearId: null,
      selected: "",
      modules:[]
    };
  },
  methods: {
    getyears() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(API_URL + "admin/getyears", {}, { headers: headers })
        .then((res) => {
          this.years = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    getsemesters() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/getsemesters",
          { yearid: this.yearId },
          { headers: headers }
        )
        .then((res) => {
          this.semesters = res.data;
          console.log(this.semesters);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    
         getmodules(){

            const API_URL = 'http://127.0.0.1:4000/';
      
        
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.token
          }
         

axios.post(API_URL + 'admin/getmodules', { semester:this.selected} ,{ headers : headers}
        
      
    ).then((res)=>{
      this.modules = res.data;
      console.log(this.modules)
      this.$store.dispatch("auth/saveModules", {
        modules: this.modules
      });
     
      
        

    }).catch((err)=>{
        console.log(err.message);
     
      
    });
     




        },








    saveId() {
      const selectedId = this.selected;

      this.$store.dispatch("auth/saveId", {
        semesterId: selectedId
      });

      
      $("#semesters").modal('hide')
   


     

      this.getmodules();
 
      

      
const path = "/dashboard/entities/modules"
if (this.$route.path !== path) this.$router.push(path)


      

   //  this.$router.push("/dashboard/entities/modules");
     
    },

    getYearId(year) {
      this.yearId = year.id;
    },
  },

  created() {
    this.getyears();
  },
};
</script>
