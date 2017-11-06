import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueAwesome from 'vue-awesome/icons'
import Impact from './components/impact.vue'
import Pilot from './components/pilot.vue'
var Icon = require('vue-awesome')


Vue.use(Icon);
Vue.use(BootstrapVue);
Vue.use(VueRouter);


// globally (in your main .js file)
const Donate = { template: require('./components/pages/donate.html') }
const Team = { template: require('./components/pages/team.html') }
const Contact = { template: require('./components/pages/contact.html') }
const Home = { template: require('./components/pages/index.html') }

const routes = [
  { path: '/', component: Home },
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

require('./sass/style.scss');
require('./index.html');
require('./Components/mapStyle.js');
require('./Components/Database.js');


new Vue({
  router,
  el: '#app',
  render: h => h(App)

});
