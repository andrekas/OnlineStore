<template>
  <div>
    <div class="title" style="text-align: center">
      <h1 style="margin: 0">Tooted</h1>
    <product-list></product-list>
  </div>
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

<style scoped>
.title{
  background: #F7F8FB;
  border-bottom: 20px;
}
</style>
