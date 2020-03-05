<template>
  <div id="todo-container">
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem v-bind:todo="todo" @deleteTodo="deleteTodo" />
    </div>
    <div class="add-todo-container">
        <button class="add-todo" @click="showAddDialog">Add To Do</button>
    </div>
    <AddTodo v-bind:open="isAddDialogVisible" @hideAddDialog="hideAddDialog" @addTodo="addTodo" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import ax from 'axios';
export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo
  },
  data() {
    return {
      todos: [],
      isAddDialogVisible: false
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    showAddDialog() {
        this.isAddDialogVisible = true;
    },
    hideAddDialog() {
        this.isAddDialogVisible = false;
    },
    async addTodo(text) {
        const resp = await ax.post('https://jsonplaceholder.typicode.com/todos', {title: text, completed: false});
        this.todos = [...this.todos, resp.data];
        this.hideAddDialog();
    }
  },
  async created() {
      const todos = await ax.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
      this.todos = todos.data;
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
