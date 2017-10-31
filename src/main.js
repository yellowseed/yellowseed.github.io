import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter)

const Impact = { template: require('./components/pages/impact.html') }
const Donate = { template: require('./components/pages/donate.html') }
const Farmer = { template: require('./components/pages/pilot.html') }
const Team = { template: require('./components/pages/team.html') }
const Contact = { template: require('./components/pages/contact.html') }
const Home = { template: require('./components/pages/index.html') }

const routes = [
  { path: '/', component: Home },
  { path: '/impact', component: Impact },
  { path: '/donate', component: Donate },
  { path: '/pilot', component: Farmer },
  { path: '/team', component: Team },
  { path: '/contact', component: Contact }
]
const router = new VueRouter({
  routes
})

require('./sass/style.scss');
require('./index.html');

new Vue({
  router,
  el: '#app',
  render: h => h(App)

});
