<template>
  <div>
    <div class="filter">
    <select v-model="storeFilter">
      <option value="undefined">All Stores</option>
      <option value="Estonia">Estonia</option>
      <option value="Finland">Finland</option>
    </select>
    <select v-model="stockFilter">
      <option value="undefined">All products</option>
      <option value="true">In stock</option>
      <option value="false">Out of stock</option>
    </select>
  </div>
    <div class="products">
      <div class="container">
        <div class="row">
        <template v-for="product in products">
          <product-item v-bind:key="product.item" :product="product"></product-item>
        </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem';


export default {
  name: 'product-list',
  storeFilter: 'undefined',
  stockFilter: 'undefined',

  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  data() {
    return {
    };
  },
  components: {
    'product-item': ProductItem,
  },
  computed: {
    /* filteredPeople() {
      const vm = this;
      const stores = vm.storeFilter;
      const stock = vm.stockFilter;

      if (stores === 'undefined' && stock === 'undefined') {
        return this.created();
      }
      return vm.products.filter(product =>
        (stores === 'undefined' || product.store === stores) &&
        (stock === 'undefined' || product.instock === stock),

      );
    }, */
    products() {
      return this.$store.getters.allProducts;
    },
  },
};

</script>

<style>
  .products {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
