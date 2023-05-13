<template>
  <div class="products-list-container">
    <ProductsListHeader />
  </div>
</template>
<script>
import ProductsListHeader from './ProductsListHeader.vue';

export default {
  name: 'ProductsListContainer',
  components: {ProductsListHeader},
  setup() {},
};
</script>
<style lang="scss">
.products-list-container {
  height: 350px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.284);
}
</style>
