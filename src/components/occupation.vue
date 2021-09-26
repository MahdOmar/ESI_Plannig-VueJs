<template>
  <div class="m-5">
    <div class="d-flex justify-content-between">
      <h4 class="m-2">{{ user.firstname }} {{ user.lastname }}</h4>
      <button
        type="button"
        data-toggle="modal"
        data-target="#add_resp"
        class="btn btn-primary btn-sm m-2"
      >
        <i class="fa fa-fw fa-plus"></i>Ajouter Occupation
      </button>
    </div>

    <table id="table" class="table text-center">
      <thead>
        <tr>
          <th scope="col" class="text-primary">Jour</th>

          <th scope="col" class="text-primary">Debut</th>

          <th scope="col" class="text-primary">Fin</th>
          <th scope="col" class="text-primary">Actions</th>
        </tr>
      </thead>
      <tbody id="sub_entities_table">
        <!--    <tr v-for="(responsable,i) in responsables" :key="i">
                    
                    <td>  {{responsable.user.firstname }} {{ responsable.user.lastname }}</td>
                   
                    <td> {{ responsable.user.type}} </td>
                   
                    <td>
                       
                        <button type="button" title="Supprimer responsable" class="btn btn-danger btn-sm" @click=" deleteoccup(occup)"><i class="fa fa-fw fa-trash"></i></button>
                    
                    </td>
                </tr> -->

        <tr>
          <td>Dimanche</td>

          <td>10h</td>
          <td>12h</td>

          <td>
            <button
              type="button"
              title="Supprimer occupation"
              class="btn btn-danger btn-sm"
              @click="deleteoccup(occup)"
            >
              <i class="fa fa-fw fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="add_resp">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Ajouter Occupation</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="row justify-content-center">
              <div v-if="success" class="text-success text-center m-2 col-md-4">
                <p>{{ success }}</p>
              </div>
            </div>

            <form @submit.prevent="addOccupation" class="text-left">
              <div class="form-group">
                <label for="select">Selectioner Jour </label>
                <select
                  v-model="occup.jour"
                  class="custom-select"
                  name="occupation"
                  id="select"
                >
                  <option value="1">Dimanche</option>
                  <option value="2">Lundi</option>
                  <option value="3">Mardi</option>
                  <option value="4">Mercredi</option>
                  <option value="5">Jeudi</option>
                </select>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="group_name">Debut Heure</label>
                  <input
                    v-model="occup.StartH"
                    name="ExamenH"
                    type="number"
                    class="form-control"
                    id="ExamenH"
                    min="8"
                    max="17"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="group_name">Debut Minute</label>
                  <input
                    v-model="occup.StartMin"
                    name="ExamenMin"
                    type="number"
                    class="form-control"
                    id="ExamenMin"
                    min="0"
                    max="59"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6">
                  <label for="group_name">Fin Heure</label>
                  <input
                    v-model="occup.EndH"
                    name="ExamenH"
                    type="number"
                    class="form-control"
                    id="ExamenH"
                    min="8"
                    max="17"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="group_name">Fin Minute</label>
                  <input
                    v-model="occup.EndMin"
                    name="ExamenMin"
                    type="number"
                    class="form-control"
                    id="ExamenMin"
                    min="0"
                    max="59"
                    required
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
                <button type="submit" class="btn btn-primary">Ajouter</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--   Modify responsable    -->

    <div class="modal fade" id="edit_resp">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Editer Occupation</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="row justify-content-center">
              <div v-if="success" class="text-success text-center m-2 col-md-4">
                <p>{{ success }}</p>
              </div>
            </div>

            <form @submit.prevent="editOccupation" class="text-left">
              <div class="form-group">
                <label for="select">Selectioner Jour </label>
                <select
                  v-model="occupE.jour"
                  class="custom-select"
                  name="occupation"
                  id="select"
                >
                  <option value="1">Dimanche</option>
                  <option value="2">Lundi</option>
                  <option value="3">Mardi</option>
                  <option value="4">Mercredi</option>
                  <option value="5">Jeudi</option>
                </select>
              </div>
              <div class="form-group row">
                <div class="col-md-6">
                  <label for="group_name">Debut Heure</label>
                  <input
                    v-model="occupE.StartH"
                    name="ExamenH"
                    type="number"
                    class="form-control"
                    id="ExamenH"
                    min="8"
                    max="17"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="group_name">Debut Minute</label>
                  <input
                    v-model="occupE.StartMin"
                    name="ExamenMin"
                    type="number"
                    class="form-control"
                    id="ExamenMin"
                    min="0"
                    max="59"
                    required
                  />
                </div>
              </div>

              <div class="form-group row">
                <div class="col-md-6">
                  <label for="group_name">Fin Heure</label>
                  <input
                    v-model="occupE.EndH"
                    name="ExamenH"
                    type="number"
                    class="form-control"
                    id="ExamenH"
                    min="8"
                    max="17"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label for="group_name">Fin Minute</label>
                  <input
                    v-model="occupE.EndMin"
                    name="ExamenMin"
                    type="number"
                    class="form-control"
                    id="ExamenMin"
                    min="0"
                    max="59"
                    required
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
                <button type="submit" class="btn btn-primary">Créer</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="delete">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body text-center text-danger">
            {{ error }}
          </div>

          <!-- Modal footer -->
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import $ from "jquery";
import Swal from "sweetalert2";
import Occupation from "../models/occupation";

export default {
  computed: mapGetters({
    cour: "auth/cour",
    token: "auth/token",
    user: "auth/userEns",
  }),

  data() {
    return {
      Enseignants: [],
      responsables: [],
      profId: "",
      profE: "",
      success: "",
      error: "",
      occup: new Occupation("", "", "", "", "", ""),
      occupE: "",
    };
  },

  methods: {
    addOccupation() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/addresponsable",
          {
            type: this.cour.type,
            userId: this.profId,
            targetId: this.cour.id,
          },
          { headers: headers }
        )
        .then((res) => {
          this.success = "Responsable Ajouté";
          this.getresponsables();

          setTimeout(function () {
            $("#add_resp").modal("hide");
          }, 1 * 1000);
        })
        .catch((err) => {});
    },

    editOccupation() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/editresponsable",
          {
            type: this.cour.type,
            userId: this.profId,
            targetId: this.cour.id,
          },
          { headers: headers }
        )
        .then((res) => {
          this.success = "Responsable Edité";
          this.getresponsables();

          setTimeout(function () {
            $("#edit_resp").modal("hide");
          }, 1 * 1000);
        })
        .catch((err) => {});
    },

    getOccupations() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };
      //  console.log(this.cour)

      axios
        .post(
          API_URL + "admin/getproflist",
          { type: this.cour.type, targetId: this.cour.id },
          { headers: headers }
        )
        .then((res) => {
          console.log("ProfList: " + res.data);
          this.Enseignants = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    deleteoccup(occup) {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };
      Swal.fire({
        title: "Vous etes sur?",
        text: "Vous ne pourrez pas revenir en arrière !",
        type: "Alerte",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Annuler",
        confirmButtonText: "Oui, supprimer!",
      }).then((result) => {
        if (result.value) {
          console.log(resp);

          axios
            .post(
              API_URL + "admin/deleteresponsable",
              { id: occup.id, type: this.cour.type },
              { headers: headers }
            )
            .then((res) => {
              this.error = "";
              this.success = "Enseignant Supprimé";

              this.getresponsables();
              console.log("im heeeeeeeeeeere");
            })
            .catch((err) => {
              this.success = "";

              this.error = err.response.data.error;
              $("#delete").modal("show");

              setTimeout(function () {
                $("#delete").modal("hide");
              }, 1 * 4000);
              // console.log(err.response.data)
            });
        }
      });
    },

    getOccupation(occup) {
      this.occupE = Object.assign({}, occup);
    },
  },

  created() {},
};
</script>
