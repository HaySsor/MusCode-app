<template>
  <table class="table">
    <tr>
      <th class="id">#</th>
      <th class="name">NAZWA</th>
      <th class="promotional-price">PROMOCYJNA CENA</th>
      <th class="price">CENA</th>
      <th class="currency">WALUTA</th>
    </tr>
    <ProductsListTableItem v-for="product in products" :key="product.id" :product="product" />
  </table>
</template>
<script>
import productStore from '../../store/productStore.js';
import ProductsListTableItem from './ProductsListTableItem.vue';

export default {
  name: 'ProductsListTable',
  components: {ProductsListTableItem},
  setup() {
    const {products} = productStore();
    return {products};
  },
};
</script>
<style lang="scss" scoped>
  .table{
    width: 100%;
    border-collapse: collapse;
    th{
      border-bottom: 1px solid #b2b2b2;
      text-align: left;
      padding-bottom: 5px;
      padding-left: 2px;
      font-weight: normal;
      font-size: 14px;
    }
    .id{
      width: 10%;
      padding-left: 10px;
    }
    .name{
      width: 40%;
    }
    .promotional-price{
      width: 25%;
    }
    .price{
      width: 15%;
    }
    .currency{
      width: 10%;
    }
  }
</style>
