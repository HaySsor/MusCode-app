<template>
  <div class="modal">
    <div class="shadow" @click="closeModal"></div>
    <div class="modal-body">
      <EditProductModalHeader :name="openProduct.name" />
      <EditProductImage :img="openProduct.img" />
      <EditProductForm
        :openProduct="openProduct"
        :closeModal="closeModal"
        :handleProductChange="handleProductChange" />
    </div>
  </div>
</template>
<script>
import EditProductModalHeader from './EditProductModalHeader.vue';
import EditProductImage from './EditProductImage.vue';
import EditProductForm from './EditProductForm.vue';

export default {
  name: 'EditProductModal',
  components: {EditProductModalHeader, EditProductImage, EditProductForm},
  props: {
    closeModal: Function,
    openProduct: Object,
    handleProductChange: Function,
  },
};
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 50;
}
.shadow {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.567);
  z-index: 49;
}
.modal-body {
  position: absolute;
  width: 33%;
  height: 100%;
  background-color: white;
  z-index: 51;
  right: 0;
}
</style>
