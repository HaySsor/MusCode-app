<template>
  <div class="product-tiles-box">
    <ProductTile v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>
<script>
import ProductTile from './ProductTile.vue';
import productStore from '../../store/productStore';
export default {
  name: 'ProductsTilesBox',
  components: {ProductTile},
  setup(){
    const { products } = productStore()
    return {products}
  }
};
</script>
<style lang="scss" scoped>
.product-tiles-box {
  display: flex;
  gap: 15px;
}
</style>
