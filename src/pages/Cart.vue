<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1>Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-details :product="product" :key="product.id"></product-details>
    </template>
    <div class="total">Total: {{total}}€</div>
  </div>
  <div v-else class="title"><h1> Your Cart is Empty</h1></div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails';

export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  components: {
    productDetails: ProductDetails,
  },
};
</script>
<style>
  .product-details{
    padding: 0;
  }
  .total{
    font-weight: bold;
    text-align: center;
    font-size: xx-large;
  }
</style>
