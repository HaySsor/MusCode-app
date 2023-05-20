<template>
  <div class="todo-list-container">
    <TodoHeaderContainer :tasksList="tasksList" />
    <div class="todo-list-container__tasks">
      <TodoListUlList
        :tasksList="tasksList"
        @CheckChangeTask="handleCheckTask" />
      <TodoAddNewTaskInput @newTask="addNewTaskToList" />
    </div>
  </div>
</template>
<script>
import {ref} from 'vue';
import TodoListUlList from './TodoListUlList.vue';
import TodoAddNewTaskInput from './TodoAddNewTaskInput.vue';
import TodoHeaderContainer from './TodoHeaderContainer.vue';

export default {
  name: 'TodoListContainer',
  components: {TodoListUlList, TodoAddNewTaskInput, TodoHeaderContainer},
  setup() {
    const tasksList = ref([
      {text: 'Lorem ipsum dolor sit amet.', done: false, id: 1},
      {text: 'consectetur adipisicing elit. Quasi, ipsa', done: false, id: 2},
      {text: 'Quasi, ipsa optio molestias voluptas', done: false, id: 3},
    ]);

    const addNewTaskToList = (newTaskObject) => {
      tasksList.value.push(newTaskObject);
    };

    const handleCheckTask = (newTaskObject) => {
      const {done, id} = newTaskObject;
      const newTaskList = tasksList.value.map((task) => {
        return task.id === id ? {...task, done: done} : task;
      });

      console.log(newTaskList);
      tasksList.value = newTaskList;
    };

    return {tasksList, addNewTaskToList, handleCheckTask};
  },
};
</script>
<style lang="scss" scoped>
.todo-list-container {
  @include container;

  &__top {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    color: $title-color;
    font-size: 1.6rem;
    &-done {
      font-weight: 400;
    }
  }
  &__tasks {
    padding: 20px;
    padding-top: 0;
  }
}
</style>
