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
export default {
  name: "Todos",
  components: {
    TodoItem,
    AddTodo
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Todo 1", isChecked: true },
        { id: 2, text: "Todo 2", isChecked: false }
      ],
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
    addTodo(text) {
        let newId = 1;
        const lastTodo = this.todos[this.todos.length - 1];
        newId = lastTodo ? lastTodo.id + 1 : newId;

        this.todos = [...this.todos, {
            id: newId, text: text, isChecked: false
        }];

        this.hideAddDialog();
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
