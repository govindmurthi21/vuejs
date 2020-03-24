<template>
  <div id="todo-container">
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItem v-bind:todo="todo" @deleteTodo="deleteTodo" />
    </div>
    <div class="add-todo-container">
        <button class="add-todo" @click="showAddDialog">Add To Do</button>
    </div>
    <AddTodo v-bind:open="isAddDialogVisible" @hideAddDialog="hideAddDialog" @addTodo="(text) => {this.addTodo({text, callback: this.hideAddDialog})}" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import AddTodo from "./AddTodo.vue";
import {mapGetters, mapActions} from 'vuex';
// import ax from 'axios';
export default {
  name: "Todos",
  computed: mapGetters(['allTodos']),
  components: {
    TodoItem,
    AddTodo
  },
  data() {
    return {
      isAddDialogVisible: false
    };
  },
  methods: {
    ...mapActions(['getAllTodos', 'addTodo']),
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    showAddDialog() {
        this.isAddDialogVisible = true;
    },
    hideAddDialog() {
        this.isAddDialogVisible = false;
    }
    // async addTodo(text) {
    //     const resp = await ax.post('https://jsonplaceholder.typicode.com/todos', {title: text, completed: false});
    //     this.todos = [...this.todos, resp.data];
    //     this.hideAddDialog();
    // }
  },
  async created() {
      this.getAllTodos();
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
