<template>
  <div class="tile">
    <ProductTileHeader :name="product.name" />
    <ProductTileImage :img="product.img" :name="product.name" />
    <ProductTilePrice
      :price="product.price"
      :promotionalPrice="product.promotionalPrice"
      :currency="product.currency" />
    <ProductPromoBadge
      v-if="cheekIfIsPromo"
      :price="product.price"
      :promotionalPrice="product.promotionalPrice" />
  </div>
</template>
<script>
import ProductTileHeader from './ProductTileHeader.vue';
import ProductTileImage from './ProductTileImage.vue';
import ProductTilePrice from './ProductTilePrice.vue';
import ProductPromoBadge from './ProductPromoBadge.vue';
import {computed} from 'vue';
export default {
  name: 'ProductTile',
  components: {
    ProductTileHeader,
    ProductTileImage,
    ProductTilePrice,
    ProductPromoBadge,
  },
  props: {
    product: Object,
  },
  setup(props) {
    const cheekIfIsPromo = computed(() => {
      if (props.product.promotionalPrice === 0) {
        return false;
      }
      return true;
    });

    return {cheekIfIsPromo};
  },
};
</script>
<style lang="scss" scoped>
.tile {
  width: 350px;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.284);
  position: relative;
  overflow: hidden;
}
</style>
