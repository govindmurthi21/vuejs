<template>
    <div
      class="todo-item"
      v-bind:class="{ 'is-checked': todo.isChecked }"
      v-on:click="toggleChecked"
    >
      {{ todo.text }}
    </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
      toggleChecked(e) {
          console.log(e);
          this.todo.isChecked = !this.todo.isChecked;
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
</style>
