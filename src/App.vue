<template>
  <div id="app">
    <navigation :brand="{title:'yellowseed',image:'../assets/images/logo-a3968b6dfba1af1e59e3277d566e892288d95f2d98abff2b0dcdf921976ed0f5.svg'}" :items="[{title:'Impact'}, {title:'Farmer'},{title:'Team'},{title:'Contact'},{title:'Donate'}]" />
    <router-view></router-view>
    <foot-note>
    </foot-note>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import FootNote from '@/components/FootNote.vue'
import GoogleMap from '@/components/GoogleMap.vue'
import Embedly from '@/components/Embedly.vue'

export default {
  components: {
    Navigation,
    FootNote,
    GoogleMap,
    Embedly
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  background-color:white!important;
}
</style>
