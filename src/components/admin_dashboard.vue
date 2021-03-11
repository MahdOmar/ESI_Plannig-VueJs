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
             


               <li><router-link to="/dashboard/welcome"><Icon type="ios-speedometer" /> Dashboard</router-link></li>
              <li><router-link to="category"><Icon type="ios-speedometer" /> Category</router-link></li>
              <li><router-link to="adminusers"><Icon type="ios-speedometer" /> Admin users</router-link></li>
              <li><router-link to="role"><Icon type="ios-speedometer" /> Role Management</router-link></li>
              <li><router-link to="assignRole"><Icon type="ios-speedometer" /> Assign role</router-link></li>


             
           
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
             
               <li><i class="fas fa-bars pl-3"></i></li>
     
             
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
    	<router-view/>
    </div>
</template>
 <script>

   

    export default {
       
    

        }
    
</script>