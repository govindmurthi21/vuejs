<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Welcome</router-link></li>
      <li><router-link to="/todos">Todos</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Todos from './components/Todos.vue';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: HelloWorld},
    {path: '/todos', component: Todos}
  ]
})

export default {
  name: 'App',
  router: router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
