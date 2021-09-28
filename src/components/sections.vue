<template>
  <div>
    <button
      type="button"
      data-toggle="modal"
      data-target="#add_section"
      style="float: right"
      class="btn btn-primary btn-sm m-2"
    >
      <i class="fa fa-fw fa-plus"></i>Ajouter Section
    </button>

    <table class="table bg-white">
      <thead class="">
        <tr>
          <th scope="col" class="text-primary">Nom</th>

          <th scope="col" class="text-primary">Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="!sections">
          <td>Pas de Sections</td>
        </tr>

        <tr v-for="section in sections" :key="section.id">
          <td>{{ section.name }}</td>

          <td>
            <button
              type="button"
              title="Editer"
              class="btn btn-primary btn-sm"
              data-toggle="modal"
              data-target="#edit_section"
              @click="getSection(section)"
            >
              <i class="fa fa-fw fa-edit"></i>
            </button>
            <button
              type="button"
              title="Supprimer"
              class="btn btn-danger btn-sm"
              @click="deletesection(section)"
            >
              <i class="fa fa-fw fa-trash"></i>
            </button>
            <button
              type="button"
              class="btn btn-info btn-sm"
              @click="saveSection(section)"
            >
              Gérer
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="modal fade" id="add_section">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Créer Nouvelle Section</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form @submit.prevent="addSection" class="text-left">
              <div class="form-group">
                <label for="name">Nom du Section</label>
                <input
                  v-model="sectionName"
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

    <!--    Modify Section   -->
    <div class="modal fade" id="edit_section">
      <div class="modal-dialog modal-md">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title">Editer Section</h5>

            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <form @submit.prevent="editSection" class="text-left">
              <div class="form-group">
                <label for="name">Nom du Section</label>
                <input
                  v-model="sectionNameE.name"
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
import $ from "jquery";

export default {
  computed: mapGetters({
    token: "auth/token",
    sections: "auth/sections",
  }),

  data() {
    return {
      yearName: this.$parent.year.name,
      sectionName: "",
      sectionNameE: "",
      sectionId: "",
      // sections : [],
      yearId: this.$parent.yearId,
      error: "",
      success: "",
    };
  },

  methods: {
    addSection() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/addsection",
          {
            year: this.yearId,
            name: this.sectionName,
          },
          { headers: headers }
        )
        .then((res) => {
          this.error = "";
          this.success = "Section ajouté";

          this.getsections();
          var that = this;

          setTimeout(function () {
            $("#add_section").modal("hide");
            that.success = "";
          }, 1 * 1000);
        })
        .catch((err) => {
          this.success = "";
          this.error = err.response.data.error;
        });
    },
    editSection() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/updatesection",
          {
            id: this.sectionId,
            name: this.sectionNameE.name,
          },
          { headers: headers }
        )
        .then((res) => {
          this.error = "";
          this.success = "Section Edité";
          this.getsections();
          var that = this;
          setTimeout(function () {
            $("#edit_section").modal("hide");
            that.success = "";
          }, 1 * 1000);

          this.getsections();
        })
        .catch((err) => {
          this.success = "";
          this.error = err.response.data.error;
        });
    },

    getsections() {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };

      axios
        .post(
          API_URL + "admin/getsections",
          { year: this.yearId },
          { headers: headers }
        )
        .then((res) => {
          this.$store.dispatch("auth/saveSections", {
            sections: res.data,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    },

    saveSection(section) {
      this.$store.dispatch("auth/saveSection", {
        section: section,
      });

      this.$router.push("groupes");
    },

    getSection(section) {
      this.sectionNameE = Object.assign({}, section);
      console.log(section.id);
      this.sectionId = section.id;
    },

    splice(arr, val) {
      for (var i = arr.length; i--; ) {
        if (arr[i] === val) {
          arr.splice(i, 1);
        }
      }
    },

    deletesection(section) {
      const API_URL = "http://127.0.0.1:4000/";

      const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.token,
      };
      Swal.fire({
        title: "Vous êtes sûr?",
        text: "Vous ne pourrez pas revenir en arrière !",
        type: "Alerte",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Annuler",
        confirmButtonText: "Oui, Supprimer!",
      }).then((result) => {
        if (result.value) {
          axios
            .post(
              API_URL + "admin/deletesection",
              { id: section.id },
              { headers: headers }
            )
            .then((res) => {
              this.error = "";
             
              this.getsections();
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
    //this.getsections();
  },
};
</script>
