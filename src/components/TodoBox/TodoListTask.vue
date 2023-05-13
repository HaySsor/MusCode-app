<template>
  <li class="todo-task">
    <input
      type="checkbox"
      :checked="task.done"
      v-model="doneTask"
      :id="task.id" />
    <label :for="task.id">{{ task.text }}</label>
  </li>
</template>
<script>
import {ref, watch} from 'vue';
export default {
  name: 'TodoListUlList.',
  props: {
    task: Object,
  },
  setup(props, context) {
    const doneTask = ref(false);

    watch(doneTask, (currentValue) => {
      context.emit('ChangeCheckTask', {done: currentValue, id: props.task.id});
    });

    return {doneTask};
  },
};
</script>
<style lang="scss" scoped>
.todo-task {
  display: flex;
  gap: 5px;
  align-items: center;
  border-bottom: 1px solid #b2b2b2;
  width: 100%;
  padding: 13px 10px;

  label {
    font-weight: lighter;
    padding: 5px 15px;
    cursor: pointer;
  }
  input[type='checkbox'] {
    position: relative;
    cursor: pointer;
  }
  input[type='checkbox']:before {
    content: '';
    display: block;
    position: absolute;
    width: 18px;
    height: 18px;
    top: -2px;
    left: -2px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: white;
  }
  input[type='checkbox']:checked:after {
    content: '';
    position: absolute;
    display: flex;
    top: 2px;
    left: 2px;
    width: 10px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-color: #862583;
  }
  input[type='checkbox']:disabled:before {
    border: 2px solid #333;
    background-color: rgb(128, 128, 128);
    border-radius: 5px;
  }
  input[type='checkbox']:disabled ~ label {
    color: rgba(128, 128, 128, 0.427);
  }
}
</style>
