<template>
  <header class="todo-list-container__top">
    <h3 class="todo-list-container__top-title">Lista todo</h3>
    <span class="todo-list-container__top-done"
      >Wykonane: {{ doneTodoTasks }}</span
    >
  </header>
</template>
<script>
import {computed} from 'vue';

export default {
  name: 'TodoHeaderContainer',
  props: {
    tasksList: Array,
  },
  setup(props) {
    const doneTodoTasks = computed(() => {
      return props.tasksList.filter((task) => task.done === true).length;
    });

    return {doneTodoTasks};
  },
};
</script>
<style lang="scss" scoped>
.todo-list-container__top {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: $title-color;
  font-size: 1.6rem;
  &-title {
    font-weight: 400;
  }
  &-done {
    font-weight: 400;
  }
}
</style>
