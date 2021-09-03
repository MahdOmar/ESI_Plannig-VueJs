<template>
  <div class="container-fluid" style="padding-left: 40px">
    <div class="p-2">
      <h1>Gestion des Modules</h1>
      <p>Ici, vous pouvez ajouter, modifier et supprimer les modules</p>
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

    <div class="modal fade" id="semesters">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Semester</h5>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div id="model_body"></div>

            <br />
            <div>
              <form @submit.prevent="saveId">
                <div class="form-group">
                  <label for="select">Selectioner Semester </label>
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
                  confirmer
                </button>
                <button
                  class="btn btn-primary btn-sm text-center text-white m-2"
                  data-dismiss="modal"
                >
                  Anuller
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
export default {
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
    saveId() {
      const selectedId = this.selected;

      this.$store.dispatch("auth/saveId", {
        semesterId: selectedId
      });

      this.$router.push("/dashboard/entities/modules");
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
