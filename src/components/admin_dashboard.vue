<template>
   <!-- <div>
        

 
    </div> -->
   <div class="bg-white">
      <div >
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <h3><a href="/" style="text-align:center; color:white">ESI PLANNIG</a></h3>
          <!--<img src="/img/logo.jpg" style="width: 108px;margin-left: 68px;"/>-->
        </div>

        <!--~~~~~~~~ MENU CONTENT ~~~~~~~~-->
        <div  class="_1side_menu_content" style=" background: #fff;">
          <div class="_1side_menu_img_name">
            <!-- <img class="_1side_menu_img" src="/pic.png" alt="" title=""> -->
          
          </div>

          <!--~~~ MENU LIST ~~~~~~-->
          <div   class="_1side_menu_list " >
            <ul class="_1side_menu_list_ul">
             


               
               <li v-if="user.role === 0" class="item font-weight-bold" style="color:#0066ff">Enseignants </li>
              <li v-if="user.role === 0"  class="custom" ><router-link to="/dashboard/users" ><i class="fas fa-users"></i> Gestion des Enseignants</router-link></li>

                 <li v-if="user.role === 0" class="item font-weight-bold" style="color:#0066ff"> Emploi du temps</li>
              <li v-if="user.role === 0" ><router-link to="/dashboard/all_planning"><i class="fas fa-table"></i>Tous les Emplois </router-link></li>
              <li  v-if="user.role === 0" class="line"></li>
                <li v-if="user.role === 0" >
                <a href="#drop" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle "><i class="fas fa-calendar-plus"></i> Nouveau Emploi du Temps</a>
                <ul class="collapse list-unstyled" id="drop">
                  
                    
                         <li><router-link to="/dashboard/manual"><i class="fas fa-puzzle-piece"></i> Génénration Manuelle </router-link></li>
                    
                    <li class="line"></li>
                    <li>
                      <a ><i class="fas fa-bolt"></i>  Génération Automatique</a>
                  </li>
                </ul>
            </li>


         <li v-if="user.role === 0" class="item font-weight-bold" style="color:#0066ff"> Gestion des Modules</li>
              <li v-if="user.role === 0" ><router-link to="/dashboard/entities"><i class="fas fa-calendar-plus"></i> Definir les Modules</router-link></li>
                <li v-if="user.role === 0" ><router-link to="/dashboard/requirements"><i class="fas fa-calendar-plus"></i> Definir les Endroits</router-link></li>
              
          
          <li v-if="user.role === 0" class="item font-weight-bold" style="color:#0066ff"> Gestion des Sections et des Groupes</li>
              <li v-if="user.role === 0" ><router-link to="/dashboard/sections-groupes"><i class="fas fa-calendar-plus"></i> Definir les Sections et des Groupes</router-link></li>


              <li v-if="user.role === 1" ><router-link to="/dashboard/plannings"> <i class="fas fa-table"></i>Tous les Emplois</router-link></li>
              <li v-if="user.role === 1" ><router-link to="/dashboard/g_planning"><i class="fas fa-table"></i>Emploi du temps Générale </router-link></li>
              
          
              <li v-if="user.role === 1"><router-link to="/dashboard/profile"><i class="fas fa-user"></i>Profile</router-link></li>
              


             
           
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
                 <a href="#drop2" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle text-white text-capitalize"> {{ user.username }} </a>  <p class="text-white" style="font-size:15px">Administrateur</p>
                   <ul class="collapse list-unstyled" id="drop2">
                  
                  
                    
                         <li ><a @click="logout">Logout</a></li>
                    
                   
                </ul>


                   </li>
                  
           
            </ul>
           
        </div>
        </div>

      




      </div>
      <!--========= HEADER ==========-->
    </div>
    <div class="main bg-white">
    	<router-view/>
      </div>
    </div>
</template>
 <script>

import {mapGetters} from 'vuex'

   export default {
        
        computed: mapGetters({
          user:'auth/user'
        }),

        methods :{
          logout(){

            this.$store.dispatch('auth/logout');
             this.$router.push( '/' ) 



          }



        },
        created(){
        //  console.log(this.user)
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