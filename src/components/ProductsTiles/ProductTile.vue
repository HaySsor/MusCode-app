<template>
  <div class="tile" @click="handleOpenModal">
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
import {computed} from 'vue';

import ProductTileHeader from './ProductTileHeader.vue';
import ProductTileImage from './ProductTileImage.vue';
import ProductTilePrice from './ProductTilePrice.vue';
import ProductPromoBadge from './ProductPromoBadge.vue';

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
    openModal: Function,
  },
  setup(props) {
    const cheekIfIsPromo = computed(() =>  props.product.promotionalPrice !== 0 );

    const handleOpenModal = () => {
      props.openModal(props.product.id);
    };

    return {handleOpenModal, cheekIfIsPromo};
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
  cursor: pointer;
}
</style>
