<template>
  <div>
    <div class="title">
      <h1>Tooted</h1>
    </div>
    <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '../components/product/ProductList';

export default {
  name: 'home',
  data() {
    return {
      msg: '',
    };
  },
  components: {
    'product-list': ProductList,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
