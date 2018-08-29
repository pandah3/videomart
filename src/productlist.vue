//HTML

<template>
  <div  class="col l4">

  // 1st product card
    <div  class="card">
      <div  class="card-image">
        <img  :src="./../img/dentalsalt.jpg" height="250">
        // :src="image" binds value of the src attribute to the value of image: in the array that holds the data about the products in stock
      </div>
      <div  class="card-content">
        <div  class="row">
          <div  class="col l6">
            {{ name }}
          </div>
          <div  class="col l6">
            {{ "$"  +  price }}
          </div>
        </div>
      </div>
      <div  class="card-action">
        <a  class="waves-effect waves-light btn blue lighten-2"  @click="addToCart(id)">Add To Cart</a>
        // @click is an event listener
      </div>
    </div>
  </div>
</template>

//JS
<script>
// export default {} allows this component to be exported to use in other components
// methods: when addToCart(id) is triggered by the event listener, it'll perform this.$store.dispatch('addToCart', id);
//this.$store.dispatch('addToCart', id); >> dispatches an addToCart action to the $store (store.js) file; id used to identify the product we wish to add to cart
export default {
  name: 'productlist',
  props: ['id', 'name', 'image', 'price'],
  methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id);
    }
  },
}
</script>
