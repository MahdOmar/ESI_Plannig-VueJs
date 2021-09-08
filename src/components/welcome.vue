 
 <template>
  

     <div class="m-4">
           <h1 class="m-4">Accueil </h1>
        <div class=" p-3 m-4 bg-white" style="background:rgb(255, 255, 255)">
           <p>{{ user.firstname }} {{ user.lastname }} , Bienvenue à ESI PLANNING votre générateur automatique d'Emploi du temps</p>

           <div class="bg-white">
               <h3 class="m-2">Etapes de génération</h3>
              
                   <div class=" col align-self-center etapes d-flex">  

                   <div>
                       <p>Semestrielle</p>
                        <ul>
                        <li><i class="fas fa-check"></i>Créer les comptes des Enseignants </li>
                        <li><i class="fas fa-check"></i>Définit les modules ainsi que leurs cours, TDs, TPs et responsables d'une année </li>
                        <li><i class="fas fa-check"></i>Définit les section et les groupes d'une année </li> 
                        <li><i class="fas fa-check"></i>Définit les Endroits </li>
                     
                   </ul>
                   </div>

                    <div>
                       <p>Examens</p>
                        <ul>
                        <li><i class="fas fa-check"></i>Créer les comptes des Enseignants </li>
                        <li><i class="fas fa-check"></i>Définit les modules ainsi que leurs cours, TDs, TPs et responsables d'une année </li>
                        <li><i class="fas fa-check"></i>Définit les section et les groupes d'une année </li> 
                        <li><i class="fas fa-check"></i>Définit les Endroits </li>
                     
                   </ul>
                   </div>

                   




                   </div>
                  
               
           </div>
    
          

        </div>
     </div>
 </template>
 <script>

   import {mapGetters} from 'vuex'

   export default {
   


        
        computed: mapGetters({
          user:'auth/user'
        }),

     
        created(){
    
       
        
        
        }
      







};

    
</script>