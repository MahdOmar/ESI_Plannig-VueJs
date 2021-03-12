<template>
   <!-- <div>
        

 
    </div> -->
   <div>
      <div >
      <!--========== ADMIN SIDE MENU one ========-->
      <div class="_1side_menu" >
        <div class="_1side_menu_logo">
          <h3 style="text-align:center;">ESI_Planning</h3>
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
             


               <li><router-link to="/dashboard/welcome"> Dashboard</router-link></li>
              <li><router-link to="/dashboard/users"> Users</router-link></li>
              <li><router-link to="/dashboard/entities"> Entities</router-link></li>
              <li><router-link to="/dashboard/manual"> Manual Genenration</router-link></li>
              <li><router-link to="/dashboard/plannings"> Plannings</router-link></li>
              <li><router-link to="/dashboard/g_planning">General Planning</router-link></li>
              <li><router-link to="/dashboard/all_planning">All Planning</router-link></li>
              <li><router-link to="/dashboard/profile">Profile</router-link></li>
               <li><router-link to="/dashboard/wish_form">Wish form</router-link></li>


             
           
            </ul>
          </div>
        </div>
      </div>
      <!--========== ADMIN SIDE MENU ========-->

      <!--========= HEADER ==========-->
      <div class="header d-flex  ">
        <div class="_2menu _box_shadow ">
          <div class="_2menu_logo ">
            <ul class="open_button">
             
               <li><i class="fas fa-bars pl-1"></i></li>
     
             
            </ul>
          
           
          </div>
        </div>

        <div class="right-settings">
           <ul class=" bg-white">
                 <li><a href="/logout"> Logout</a></li>
            
            </ul>
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
       
    

        }
    
</script>