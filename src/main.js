import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueAwesome from 'vue-awesome/icons'
import Pilot from './components/Pilot.vue'
import Impact from './components/Impact.vue'
import Donate from './components/Donate.vue'
import Contact from './components/Contact.vue'
import Welcome from './components/Welcome.vue'
import Team from './components/Team.vue'

var Icon = require('vue-awesome')


Vue.use(Icon);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


const routes = [
  { path: '/', component: Welcome },
  { path: '/impact', component: Impact },
  { path: '/donate', component: Donate },
  { path: '/pilot', component: Pilot },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact }
]
const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

require('./assets/scss/style.scss');
require('./helpers/mapStyle.js');
require('./Services/Database.js');


new Vue({
  router,
  el: '#app',
  render: h => h(App)

});
