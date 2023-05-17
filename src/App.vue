<template>
  <main>
    <section class="app-container">
      <TodoListContainer class="todo-list" />
      <ProductsListContainer class="products-list" />
      <ProductsTilesBox class="products-box" />
    </section>
  </main>
</template>

<script>
import TodoListContainer from './components/TodoBox/TodoListContainer.vue';
import ProductsListContainer from './components/ProductsList/ProductsListContainer.vue';
import ProductsTilesBox from './components/ProductsTiles/ProductsTilesBox.vue';

export default {
  components: {TodoListContainer, ProductsListContainer, ProductsTilesBox},
  setup() {},
};
</script>

<style lang="scss" scoped>
.app-container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'todo productList productList'
    'productsBox productsBox productsBox';
  max-width: 1180px;

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
