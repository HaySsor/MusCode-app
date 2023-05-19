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
      {text: 'Lorem ipsum dolor sit amet.', done: true, id: 93},
      {text: 'consectetur adipisicing elit. Quasi, ipsa', done: true, id: 93},
      {text: 'Quasi, ipsa optio molestias voluptas', done: true, id: 93},
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
  width: 350px;
  aspect-ratio: 1;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.284);

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
