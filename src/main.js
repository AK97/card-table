import Vue from 'vue'
import App from './App.vue'

var VueDragula = require('vue-dragula');

Vue.use(VueDragula);

new Vue({
  render: h => h(App),
  created: function () {
    Vue.vueDragula.options('card-bag', {
      direction: 'horizontal',
      revertOnSpill: true,
    })
  }
}).$mount('#app')
