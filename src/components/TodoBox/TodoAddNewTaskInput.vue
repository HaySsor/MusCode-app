<template>
  <div class="input-box">
    <span class="plus" @click="addTaskToList">+</span>
    <input
      type="text"
      class="add-new-task"
      placeholder="Dodaj nowy element checklisty"
      v-model="newTaskText"
      @keyup.enter="addTaskToList" />
  </div>
</template>
<script>
import {ref} from 'vue';

export default {
  name: 'TodoAddNewTaskInput',

  setup(_, context) {
    const newTaskText = ref('');

    const addTaskToList = () => {
      const newTaskObj = {
        text: newTaskText.value,
        done: false,
        id: Math.floor(Math.random() * 100),
      };
      context.emit('newTask', newTaskObj);
      newTaskText.value =''
    };

    return {newTaskText, addTaskToList};
  },
};
</script>
<style lang="scss" scoped>
.input-box {
  position: relative;
  border-bottom: 1px solid $border-color;
  padding: 10px;

  .plus {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    font-size: 2rem;
    font-weight: lighter;
    cursor: pointer;
  }
  .add-new-task {
    margin-left: 30px;
    border: none;
    width: 80%;

    &::placeholder {
      font-weight: lighter;
      margin-left: 20px;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
