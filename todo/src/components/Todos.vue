<template>
  <div id="todo-container">
    <div class="todo-item" v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return { todos: [{ id: 1, text: "Something" }] };
  }
};
</script>
