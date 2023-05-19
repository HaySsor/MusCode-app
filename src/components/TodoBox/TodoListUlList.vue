<template>
  <ul class="todo-list" v-if="tasksList.length !== 0">
    <TodoListTask
      v-for="task in tasksList"
      :key="task.id"
      :task="task"
      @CheckChangeTask="handleCheckboxChangeToContainer" />
  </ul>
  <div class="empty-list" v-else>
    <h3>Twoja lista jest pusta</h3>
  </div>
</template>
<script>
import TodoListTask from './TodoListTask.vue';

export default {
  name: 'TodoListUlList.',
  components: {TodoListTask},
  props: {
    tasksList: Array,
  },
  setup(_, context) {
    const handleCheckboxChangeToContainer = (object) => {
      context.emit('CheckChangeTask', object);
    };

    return {handleCheckboxChangeToContainer};
  },
};
</script>
<style lang="scss" scoped>
.todo-list,
.empty-list {
  list-style: none;
  overflow: auto;
  height: 220px;
}

.empty-list {
  display: flex;
  justify-content: center;
  padding-top: 40px;
  color: rgba(128, 128, 128, 0.488);
}
</style>
