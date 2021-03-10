<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left" href="https://www.positronx.io" target="_blank">
           ESI_PLANNING
        </a>
       
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
         <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from './Login.vue'
import Signup from './Signup.vue'
export default{
  components: { Login, Signup },
  data(){
    return{
        msg : 'Omar'
    }
  }
}
</script>

