<template>
  <main>
    <section class="app-container">
      <TodoListContainer class="todo-list" />
      <ProductsListContainer class="products-list" />
    </section>
  </main>
</template>

<script>
import {ref} from 'vue';
import TodoListContainer from './components/TodoBox/TodoListContainer.vue';
import ProductsListContainer from './components/ProductsList/ProductsListContainer.vue';

export default {
  components: {TodoListContainer, ProductsListContainer},
  setup() {},
};
</script>

<style lang="scss" scoped>
.app-container {
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 'todo productList productList';

  max-width: 1180px;
  
}

.todo-list {
  grid-area: todo;
}
.products-list {
  grid-area: productList;
}
</style>
