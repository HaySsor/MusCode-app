<template>
  <div class="products-list-container">
    <ProductsListHeader />
    <div class="products-list-container__table">
      <ProductsListTable
        handleProductChange="handleProductChange"
        :products="products" />
    </div>
  </div>
</template>
<script>
import ProductsListHeader from './ProductsListHeader.vue';
import ProductsListTable from './ProductsListTable.vue';

export default {
  name: 'ProductsListContainer',
  components: {ProductsListHeader, ProductsListTable},
  props: {
    handleProductChange: Function,
    products: Array,
  },
};
</script>
<style lang="scss">
.products-list-container {
  height: 350px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.284);
  &__table {
    padding: 0 20px;
  }
}
</style>
