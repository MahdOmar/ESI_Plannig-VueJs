<template>
   <!-- <div>
        

 
    </div> -->
   <div>
      <div >
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <h3><a href="/" style="text-align:center; color:white">ESI PLANNIG</a></h3>
          <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div class="_1side_menu_content">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
            <p class="_1side_menu_name">Admin</p>
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div class="_1side_menu_list">
            <ul class="_1side_menu_list_ul">
             


               
               <li class="item">Enseignants </li>
              <li><router-link to="/dashboard/users"><i class="fas fa-users"></i> Gestion des Enseignants</router-link></li>

                 <li class="item"> Emploi du temps</li>
              <li><router-link to="/dashboard/all_planning"><i class="fas fa-table"></i>Tous les Emplois </router-link></li>
              <li class="line"></li>
                <li>
                <a href="#drop" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle "><i class="fas fa-calendar-plus"></i> Nouveau Emploi du Temps</a>
                <ul class="collapse list-unstyled" id="drop">
                  
                    
                         <li><router-link to="/dashboard/manual"><i class="fas fa-puzzle-piece"></i> Génénration Manuelle </router-link></li>
                    
                    <li class="line"></li>
                    <li>
                      <a ><i class="fas fa-bolt"></i>  Génération Automatique</a>
                  </li>
                </ul>
            </li>


         <li class="item"> Gestion des Modules</li>
              <li><router-link to="/dashboard/entities"><i class="fas fa-calendar-plus"></i> Definir les Modules</router-link></li>
              
          
              <li><router-link to="/dashboard/plannings"> <i class="fas fa-table"></i>Tous les Emplois</router-link></li>
              <li><router-link to="/dashboard/g_planning"><i class="fas fa-table"></i>Emploi du temps Générale </router-link></li>
              
          
              <li><router-link to="/dashboard/profile"><i class="fas fa-user"></i>Profile</router-link></li>
              


             
           
            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header   ">
        <div class="_2menu _box_shadow d-flex justify-content-between ">
          <div class="_2menu_logo ">
            <ul class="open_button d-flex">
             
               <li><i class="fas fa-bars " style="color:white"></i></li>
              
     
             
            </ul>
          
           
          </div>
            <div class="right-settings">
           <ul class=" d-flex">
          
                
                 <li class=" user-img"> <img class="rounded-circle" src="../assets/img/images.png" style="height: 35px; width: 35px;align-self: center;"></li>

                  <li class="username">
                 <a href="#drop2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle text-white"> {{currentUser.firstname}} </a>
                   <ul class="collapse list-unstyled" id="drop2">
                  
                    
                         <li><router-link to="/lougout">Logout</router-link></li>
                    
                   
                </ul>


                   </li>
                  
           
            </ul>
        </div>
        </div>

      




      </div>
      <!--========= HEADER ==========-->
    </div>
    <div class="main">
    	<router-view/>
      </div>
    </div>
</template>
 <script>

   export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};













/*
    export default {
       
     data(){
    return{
        user : null,
        token:null
    }
  },
   async created(){

this.token=localStorage.getItem('token');


            const reponse = await axios.post('user',this.token);
            console.log(reponse);
            this.user = reponse.data;
        }
       

        }*/
</script>