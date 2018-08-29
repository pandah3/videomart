import Vue from 'vue'
import App from './App.vue'
import  store  from  './store'
import  '../node_modules/materialize-css/dist/css/materialize.min.css'
import  '../node_modules/materialize-css/dist/js/materialize.min.js'

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

//Can now use the $store variable to access the data in our store.js file
