<template>
  <header class="products-list-header">
    <h3 class="products-list-header-title">Lista Produktów</h3>
  </header>
</template>
<script>
export default {
  name: 'ProductsListHeader',
};
</script>
<style lang="scss" scoped>
.products-list-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: $title-color;
  font-size: 1.6rem;

  &-title{
    font-weight: 400;
  }
}
</style>
