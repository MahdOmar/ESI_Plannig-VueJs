 
 <template>
  <div class="m-5">
    <h1 class="m-4">Accueil</h1>
    <div
      v-if="user.role == 0"
      class="p-3 m-4 bg-white "
      style="background: rgb(255, 255, 255)"
    >
      <p>
        {{ user.firstname }} {{ user.lastname }} , Bienvenue à ESI PLANNING
        votre générateur automatique d'Emploi du temps
      </p>

      <div class="bg-white">
        <div class=" p-4">
          <h3 class="">Etapes de génération</h3>
          <div class="col align-self-center d-flex">
            <div class="etapes m-4 p-2">
              <p>Semestrielle</p>
              <ul>
                <li>
                  <i class="fas fa-check"></i>Créer les comptes des Enseignants
                </li>
                <li>
                  <i class="fas fa-check"></i>Définit les modules ainsi que
                  leurs cours, TDs, TPs et responsables d'une année
                </li>
                <li>
                  <i class="fas fa-check"></i>Définit les section et les groupes
                  d'une année
                </li>
                <li><i class="fas fa-check"></i>Définit les Endroits</li>
                <li>
                  <i class="fas fa-check"></i>Générer l'emploi du temps
                  Semestrielle en selectant l'année, semestre, section et le
                  groupe
                </li>
              </ul>
            </div>

            <div  class="etapes m-4 p-2">
              <p>Examens</p>
              <ul>
                <li>
                  <i class="fas fa-check"></i>Définit les modules ainsi que
                  leurs durée d'examen d'une année
                </li>
                <li>
                  <i class="fas fa-check"></i>Générer l'emploi du temps d'examen
                  en selectant l'année, semestre et EMD ainsi que date début et
                  date fin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="p-3 m-4 bg-white" style="background: rgb(255, 255, 255)">
      <p>
        {{ user.firstname }} {{ user.lastname }} , Bienvenue à ESI PLANNING ,le
        générateur automatique d'Emploi du temps
      </p>

      <div class="bg-white">
        <h3 class="m-2">Içi vous pouvez</h3>

        <div class="col align-self-center etapes d-flex">
          <ul>
            <li>
              <i class="fas fa-check"></i>Consulter votre emploi du temps
              général
            </li>
            <li>
              <i class="fas fa-check"></i>Consulter les emplois du temps dans
              lesquelle vous etes participé
            </li>
            <li><i class="fas fa-check"></i>Consulter votre profile</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    user: "auth/user",
  }),

  created() {},
};
</script>