<template>
  <div class="modal-container"  v-bind:class="{ 'show-modal': open }">
    <div class="modal">
      <div class="modal-header">
        <button class="modal-close" @click="$emit('hideAddDialog')">X</button>
      </div>
      <form class="add-todo-form" @submit="addTodo">
        <input type="text" v-model="text" name="text" id="" />
        <input type="submit" value="Add Todo" class="btn" />
      </form>
    </div>
    <div class="modal-background"></div>
  </div>
</template>
<script>
export default {
  name: "AddTodo",
  props: ["open"],
  data() {
    return {
      text: ""
    };
  },
  methods: {
      addTodo(e) {
         this.$emit('addTodo', this.text);
         e.stopPropagation();
         e.preventDefault();
         return false;
      }
  }
};
</script>
<style scoped>
.modal-container {
    display: none;
}

.modal {
    position: absolute;
    z-index: 10000;
    border: 1px solid #000;
    padding: 20px;
    width: 50%;
    top: 30%;
    margin: 0px auto;
    background: #fff;
    left: 25%;
}

.modal-header {
  height: 30px;
  background: #e4e4e4;
  font-size: 4px;
  text-align: end;
}

.modal-background {
  position: absolute;
  left: 0;
  top: 0;
  background: #000;
  z-index: 90;
  opacity: 0.5;
  width: 100%;
  height: 1000px;
}

.show-modal {
  display: block;
}
</style>
