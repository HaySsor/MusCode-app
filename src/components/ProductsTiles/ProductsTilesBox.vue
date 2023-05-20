<template>
  <div class="product-tiles-box">
    <ProductTile
      v-for="product in products"
      :key="product.id"
      :product="product"
      :openModal="openModal" />
    <EditProductModal
      v-if="isOpen"
      :closeModal="closeModal"
      :openProduct="openProduct"
      :handleProductChange="handleProductChange" />
  </div>
</template>
<script>
import ProductTile from './ProductTile.vue';
import EditProductModal from '../EditProductModal/EditProductModal.vue';
import {ref, reactive} from 'vue';
export default {
  name: 'ProductsTilesBox',
  components: {ProductTile, EditProductModal},
  props: {
    handleProductChange: Function,
    products: Array,
  },
  setup(props) {
    const isOpen = ref(false);
    const openProduct = ref({});

    const closeModal = () => {
      isOpen.value = false;
    };

    const openModal = (id) => {
      chosenProduct(id);
      isOpen.value = true;
    };

    const chosenProduct = (id) => {
      openProduct.value = props.products.find((item) => item.id === id);
    };

    return {isOpen, closeModal, openModal, openProduct};
  },
};
</script>
<style lang="scss" scoped>
.product-tiles-box {
  display: flex;
  gap: 15px;
}
</style>
