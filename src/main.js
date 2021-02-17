import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueSimpleAlert from "vue-simple-alert";
import VueTimepicker from 'vue2-timepicker';
import Datepicker from "vuejs-datepicker";

Vue.config.productionTip = false
Vue.prototype.$http = axios

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

Vue.use(VueSimpleAlert);
Vue.use(window.VueTimeSelector);
Vue.use(VueTimepicker)
Vue.use(Datepicker)
