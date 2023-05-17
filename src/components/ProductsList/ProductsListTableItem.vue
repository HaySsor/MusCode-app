<template>
  <tr>
    <td class="id">{{ product.id }}</td>
    <td>{{ product.name }}</td>
    <td>{{ promotionalPriceChecker }}</td>
    <td>{{ product.price }}</td>
    <td>{{ product.currency }}</td>
  </tr>
</template>
<script>
import {computed} from 'vue';
export default {
  name: 'ProductsListTableItem',
  props: {
    product: Object,
  },
  setup(props) {
    const promotionalPriceChecker = computed(() => {
      return props.product.promotionalPrice === 0
        ? ''
        : props.product.promotionalPrice;
    });

    return {promotionalPriceChecker};
  },
};
</script>
<style lang="scss" scoped>
td {
  border-bottom: 1px solid #b2b2b2;
  padding: 6px 6px 6px 0;
  font-weight: lighter;
}
tr:hover {
  background-color: #f5f8fa;
}
.id {
  padding-left: 10px;
}
</style>
