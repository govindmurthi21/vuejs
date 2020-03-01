<template>
<div id="todo-container">
  <div v-for="todo in todos" :key="todo.id">
    <TodoItem v-bind:todo="todo" @deleteTodo="deleteTodo"/>
  </div></div>
</template>

<script>
import TodoItem from './TodoItem.vue';
export default {
  name: "Todos",
  components: {
      TodoItem
  },
  data() {
    return {
      todos: [
          { id: 1, text: "Todo 1", isChecked: true },
          { id: 2, text: "Todo 2", isChecked: false }
        ]
    };
  },
  methods: {
      deleteTodo(id) {
          this.todos = this.todos.filter(t => t.id !== id);
      }
  }
};
</script>
<style scoped>
#todo-container {
    padding: 20px;
    margin: 0px auto;
    border: 1px solid #000;
}
</style>
