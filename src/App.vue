<template>
  <div id="app">
    <navigation :brand="{title:'yellowseed',image:'../images/logo-a3968b6dfba1af1e59e3277d566e892288d95f2d98abff2b0dcdf921976ed0f5.svg'}" :items="[{title:'Impact'}, {title:'Farmer'},{title:'Team'},{title:'Contact'},{title:'Donate'}]" />
    <router-view></router-view>

  </div>
</template>

<script>
import MessageToggle from '@/components/MessageToggle.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    MessageToggle,
    Navigation
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

nav{
  backround-color:white!important;
}

</style>
