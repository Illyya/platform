import Vue from 'vue'
import App from './App.vue'
import InputMask from 'vue-input-mask';
import Vuelidate from 'vuelidate'

Vue.component('input-mask', InputMask)

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
