<template>
  <h1>Muscode App</h1>
  <section class="app-container">
    <TodoListContainer class="todo-list" />
    <ProductsListContainer
      :products="products"
      :handleProductChange="handleProductChange"
      class="products-list" />
    <ProductsTilesBox
      class="products-box"
      :products="products"
      :handleProductChange="handleProductChange" />
  </section>
</template>
<script>
import {ref} from 'vue';

import TodoListContainer from '../components/TodoBox/TodoListContainer.vue';
import ProductsListContainer from '../components/ProductsList/ProductsListContainer.vue';
import ProductsTilesBox from '../components/ProductsTiles/ProductsTilesBox.vue';

import Image1 from '/photos/img1.png';
import Image2 from '/photos/img2.png';
import Image3 from '/photos/img3.png';

export default {
  name: 'ProductWrapper',
  components: {ProductsListContainer, ProductsTilesBox, TodoListContainer},
  setup() {
    const products = ref([
      {
        id: 0,
        name: 'iPhone 6s Plus 16GB',
        price: 1000,
        promotionalPrice: 649,
        currency: '$',
        img: Image1,
      },
      {
        id: 1,
        name: 'iPad Pro 32GB',
        price: 800,
        promotionalPrice: 600,
        currency: '$',
        img: Image2,
      },
      {
        id: 2,
        name: 'MacBook Pro',
        price: 8000,
        promotionalPrice: 0,
        currency: 'PLN',
        img: Image3,
      },
    ]);

    const newProductListCreate = (value, id) => {
      const {name, price, promotionalPrice, currency} = value;
      return products.value.map((product) => {
        if (product.id === id) {
          return {...product, name, price, promotionalPrice, currency};
        }
        return product;
      });
    };

    const handleProductChange = (value, id) => {
      const newProductList = newProductListCreate(value, id);
      products.value = newProductList;
    };

    return {products, handleProductChange};
  },
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 40px;
  color: $title-color;
  font-weight: normal;
}
.app-container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'todo productList productList'
    'productsBox productsBox productsBox';
  max-width: 1180px;
  margin-bottom: 50px;
  .todo-list {
    grid-area: todo;
  }
  .products-list {
    grid-area: productList;
  }
  .products-box {
    grid-area: productsBox;
  }
}
</style>
