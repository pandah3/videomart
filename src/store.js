//This is a state we created. To implement this state, import it into main.js

import  Vue  from  'vue'; //import instance of vue
import  Vuex  from  'vuex';

Vue.use(Vuex) //using state management library vuex

export default new Vuex.Store({ //set store up for export

state: {
  //adding a state property inside the store instance

products: [

{ id:  1, name:  'Lorem', image:  'https://cdn.pixabay.com/photo/2014/07/31/23/00/wristwatch-407096__340.jpg', price:  340 },

{ id:  2, name:  'Ipsum', image:  'https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__340.jpg', price:  500 },

{ id:  3, name:  'Finis', image:  'https://cdn.pixabay.com/photo/2017/09/03/14/41/mock-up-2710535__340.jpg', price:  600 },

{ id:  4, name:  'Amor', image:  'https://cdn.pixabay.com/photo/2017/08/27/05/33/trousers-2685231__340.jpg', price:  600 },

{ id:  5, name:  'Roco', image:  'https://cdn.pixabay.com/photo/2016/06/25/14/39/baseball-cap-1479012__340.png', price:  600 },

{ id:  6, name:  'Salva', image:  'https://cdn.pixabay.com/photo/2016/04/16/17/46/glasses-1333433__340.jpg', price:  600 },

],

inCart: []

},

getters: {

products:  state  =>  state.products,

inCart:  state  =>  state.inCart

},

mutations: {

ADD_TO_CART(state, id) {

state.inCart.push(id);

},

REMOVE_FROM_CART(state, index) {state.inCart.splice(index, 1)}

},

actions: {

addToCart(context, id) {

context.commit('ADD_TO_CART', id);

},

removeFromCart(context, index) {

context.commit('REMOVE_FROM_CART', index);

}

}

})
