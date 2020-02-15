import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSun, faCloudSun, faCloud, faCloudShowersHeavy, faCloudSunRain, faBolt, faSnowflake, faSmog, faWind } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSun, faCloudSun, faCloud, faCloudShowersHeavy, faCloudSunRain, faBolt, faSnowflake, faSmog, faWind)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
