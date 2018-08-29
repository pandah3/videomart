// Component

// HTML section
<template>
  <div id="app">
    <div  class="row"  style="margin-top: 100px;">
      <div  class="col l9">
      // <productlist /> renders the component
      // v-for directive binds the data to be displayed
      // v-for="product in products" loops through the products array in our store
      // For each product in the products array the id, name, image and price will be passed as data to the productlistcomponent for use
        <productlist  v-for="product  in  products"  :key="product.id"  :id="product.id"  :name="product.name"  :image="product.image"  :price="product.price"  />
      </div>
    <div  class="col l3">
    </div>
  </div>
    // <img src="./assets/logo.png">
    // <h1>{{ msg }}</h1>
    // <h2>Essential Links</h2>
    // <ul>
    //   <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    //   <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    //   <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
    //   <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    // </ul>
    // <h2>Ecosystem</h2>
    // <ul>
    //   <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    //   <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    //   <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    //   <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    // </ul>
  </div>
</template>

// JavaScript section
<script>
import  productlist  from  './productlist.vue';

export default {
  name: 'app',
  components: {
    productlist
  }
  // data () {
  //   return {
  //     msg: 'Welcome to Your Vue.js App'
  //   }
  // }
}
//import product list component
</script>

// CSS section
<style>

// Registering the product list component with the components property

// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
//
// h1, h2 {
//   font-weight: normal;
// }
//
// ul {
//   list-style-type: none;
//   padding: 0;
// }
//
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
//
// a {
//   color: #42b983;
// }
</style>
