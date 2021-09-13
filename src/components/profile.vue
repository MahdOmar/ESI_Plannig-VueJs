<template>
    
   <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="../assets/img/images.png"><span class="font-weight-bold">{{ user.firstname }}</span><span class="text-black-50">{{ user.email }}</span><span> </span></div>
        </div>
        <div class="col-md-7 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Nom</label><input type="text" v-model="user.lastname" class="form-control" ></div>
                    <div class="col-md-6"><label class="labels">Prénom</label><input type="text"  v-model="user.firstname" class="form-control" ></div>
                </div>
                <div class="row mt-3">
                    
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" v-model="user.email" class="form-control" ></div>
                 
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Type</label><input type="text" v-model="user.type" class="form-control" ></div>
                    
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
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

        methods :{
          logout(){

            this.$store.dispatch('auth/logout');
             this.$router.push( '/' ) 



          }



        },
        created(){
    
       
        
        
        }
      







};



</script>
