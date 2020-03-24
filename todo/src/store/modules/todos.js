import ax from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async getAllTodos ({commit}) {
        const todos = await ax.get('https://jsonplaceholder.typicode.com/todos?_limit=5');
        commit('setAllTodos', todos.data);
    },
    async addTodo({commit}, payload) {
        const resp = await ax.post('https://jsonplaceholder.typicode.com/todos', {title: payload.text, completed: false});
        commit('setAddTodo', resp.data);
        payload.callback();
    }
};

const mutations = {
    setAllTodos: (state, todos) => (state.todos = todos),
    setAddTodo: (state, todo) => (state.todos.push(todo))
};

export default {
    state, getters, actions, mutations
};

