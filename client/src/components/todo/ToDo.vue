<template lang="html">
  <div>
    <ul>
      <li>
        Hello World
      </li>
      <li>
        <router-link to ="/">
          link to cucc
        </router-link>
      </li>
      <li>
        <TodoEntity v-for="todo in todos" :todo='todo'></TodoEntity>
      </li>
    </ul>
      <div>
    <form v-on:submit='addTodo($event)'>
      <input type='text' placeholder='Enter todo' v-model='newTodoTitle'>
      <textarea type='text' placeholder='Todo body' v-model='newTodoBody'></textarea>
      <input type='submit'/>
    </form>
  </div>
  </div>
</template>
<script>
import TodoEntity from './TodoEntity.vue';
import ToDoAPI from '@/services/ToDoAPI.js'

export default({
    components: {TodoEntity},

  data () {
    return {
      newTodoTitle: '',
      newTodoBody: '',
      todos: []
    }
  },


  mounted () {
    this.loadTodos()
  },

  methods: {

    async addTodo (event){
      event.preventDefault();
      const todo = {
        "title": this.newTodoTitle,
        "body": this.newTodoBody
      }
      const response = await ToDoAPI.addTodo(todo);
      this.todos.push(response.data);
      this.newTodoTitle='';
      this.newTodoBody='';
    },

    async loadTodos () {
      const response = await ToDoAPI.getToDos()
      this.todos = response.data
    }

  }
})
</script>
<style lang="css">

</style>
