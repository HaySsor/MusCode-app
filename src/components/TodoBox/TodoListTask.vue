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
      context.emit('CheckChangeTask', {done: currentValue, id: props.task.id});
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
  border-bottom: 1px solid $border-color;
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
    border: 1px solid $border-color;
    border-radius: 50%;
    background-color: white;
  }
  input[type='checkbox']:checked:after {
    content: '';
    position: absolute;
    display: flex;
    top: 1px;
    left: 1px;
    width: 12px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    -webkit-mask-image: url('../../../public/photos/check.svg');
    background-color: $accent-color;
    mask-image: url(icon.svg);
  }
}
</style>
