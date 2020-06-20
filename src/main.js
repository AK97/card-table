import Vue from 'vue'
import App from './App.vue'
import Dragula from 'dragula';

Vue.config.productionTip = false
Vue.use(Dragula);

new Vue({
  render: h => h(App),
}).$mount('#app')
