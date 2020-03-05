<template>
    <div
      class="todo-item"
      v-bind:class="{ 'is-checked': todo.completed }"
      v-on:click="toggleChecked"
    >
      {{ todo.title }}
      <button class="delete-todo" @click="$emit('deleteTodo', todo.id)">X</button>
    </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
      toggleChecked() {
          this.todo.completed = !this.todo.completed;
      }
  }
};
</script>
<style scoped>
.todo-item {
  background: #f2f2f2;
  padding: 10px;
  cursor: pointer;
}

.is-checked {
  background: #e4e4e4;
}

.is-checked:before {
    width: 20px;
    height: 20px;
    background: #e4e4e4;
    content: "\2713 ";
    color: #000;
    float: left;
}

.delete-todo {
    float: right;
    width: 20px;
    height: 20px;
    color: #fff;
    font-weight: bold;
    background: #000;
}
</style>
