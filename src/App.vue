<template>
  <div id="app">
    <navigation :brand="{title:'yellowseed',image:'../../images/logo-a3968b6dfba1af1e59e3277d566e892288d95f2d98abff2b0dcdf921976ed0f5.svg'}" :items="[{title:'Impact'}, {title:'Farmer'},{title:'Team'},{title:'Contact'},{title:'Donate'}]" />
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
@import './components/style/style.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

  .impact-img1 {
    width: 53%;
    position: absolute;
    right: 0;
    margin-top: -40px;
  }

  .impact-img2 {
    width: 53%;
    margin-bottom: 40px;
    position: relative;

  }
  .img-responsive{
    display: block;
    max-width: 100%;
    height: auto;
  }

  .impact-img3 {
    width: 30%;
    right: 40px;
    margin-top: 18%;
    position: absolute;
  }

  .impact-img4 {
    margin-top: 5%;
    position: absolute;
    width: 53%;
    right: 0;
  }

  .impact-img5 {
    margin-top: 20%;
    left: 5%;
    position: absolute;
    width: 20%;
  }


</style>
