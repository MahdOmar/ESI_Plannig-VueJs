<template>
  <div class="m-5">
    <button
      type="button"
      data-toggle="modal"
      data-target="#add_requirement"
      style="float: right"
      class="btn btn-primary btn-sm m-2"
    >
      <i class="fa fa-fw fa-plus"></i>Ajouter lieu d'étude
    </button>

    <table class="table bg-white">
      <thead class="">
        <tr>
          <th scope="col" class="text-primary">Nom</th>

          <th scope="col" class="text-primary text-center">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="requirement in requirements" :key="requirement.id">
          <td>{{ requirement.name }}</td>

          <td class="text-center">
            <button
              type="button"
              title="Editer"
              class="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#edit_requirement"
              @click="getRequirement(requirement)"
            >
              <i class="fa fa-fw fa-edit"></i>
            </button>
            <button
              type="button"
              title="Supprimer"
              class="btn btn-danger btn-sm"
              @click="deletereq(requirement)"
            >
              <i class="fa fa-fw fa-trash"></i>
            </button>
            <button
              type="button"
              class="btn btn-info btn-sm"
              @click="saveRequirement(requirement)"
            >
              Gérer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="add_requirement">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Créer Nouveau lieu</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form @submit.prevent="addRequirement" class="text-left">
              <div class="form-group">
                <label for="name">Nom de lieu</label>
                <input
                  v-model="requirement.name"
                  name="name"
                  type="text"
                  class="form-control"
                  id="name"
                  required
                />
              </div>

              <div v-if="error" class="text-danger m-2">
                <p>{{ error }}</p>
              </div>
              <div v-if="success" class="text-success m-2">
                <p>{{ success }}</p>
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

          <!-- Modal footer -->
        </div>
      </div>
    </div>

    <!--    Modufy Requirement    -->

    <div class="modal fade" id="edit_requirement">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Editer lieu</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form @submit.prevent="editRequirement" class="text-left">
              <div class="form-group">
                <label for="name">Nom de lieu</label>
                <input
                  v-model="requirementE.name"
                  name="name"
                  type="text"
                  class="form-control"
                  id="name"
                  required
                />
              </div>

              <div v-if="error" class="text-danger m-2">
                <p>{{ error }}</p>
              </div>
              <div v-if="success" class="text-success m-2">
                <p>{{ success }}</p>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Fermer
                </button>
                <button type="submit" class="btn btn-primary">Editer</button>
              </div>
            </form>
          </div>

          <!-- Modal footer -->
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
import Swal from "sweetalert2";
import Module from "../models/requirement";
import Requirement from "../models/requirement";
import $ from "jquery";

export default {
  computed: mapGetters({
    token: "auth/token",
  }),

  data() {
    return {
      requirement: new Requirement("", ""),
      requirementE: "",
      requirements: [],
      error: "",
      success: "",
    };
  },

  methods: {
    addRequirement() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/addrequirement",
          {
            requirement: this.requirement,
          },
          { headers: headers }
        )
        .then((res) => {
          this.error = "";
          this.success = "Endroit ajouté";
          this.getrequirements();
          var that = this;
          setTimeout(function () {
            $("#add_requirement").modal("hide");
            that.success = "";
          }, 1 * 1000);
        })
        .catch((err) => {
          this.success = "";
          this.error = err.response.data.requirement;
        });
    },

    editRequirement() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/updaterequirement",
          {
            id: this.requirementE.id,
            name: this.requirementE.name,
          },
          { headers: headers }
        )
        .then((res) => {
          this.error = "";
          this.success = "Endroit Edité";
          this.getrequirements();
          var that = this;
          setTimeout(function () {
            $("#edit_requirement").modal("hide");
            that.success = "";
          }, 1 * 1000);
        })
        .catch((err) => {
          this.success = "";
          this.error = err.response.data.requirement;
        });
    },

    getrequirements() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(API_URL + "admin/getrequirement", {}, { headers: headers })
        .then((res) => {
          this.requirements = res.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    saveRequirement(requirement) {
      this.$store.dispatch("auth/saveRequirement", {
        requirement: requirement,
      });

      this.$router.push("subrequirements");
    },

    getRequirement(req) {
      this.requirementE = Object.assign({}, req);
    },

    deletereq(req) {
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
          axios
            .post(
              API_URL + "admin/deleterequirement",
              { id: req.id },
              { headers: headers }
            )
            .then((res) => {
              this.error = "";
              this.success = "Enseignant Supprimé";

              this.getrequirements();
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
  },
  created() {
    this.getrequirements();
  },
};
</script>
