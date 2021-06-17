<template lang="html">
  <div>
        <div>todo: </div>
        <div>{{todo.title}}</div>
        <button @click="show">Show</button>
        <div v-if="isVisible">{{todo.body}}</div>
  </div>
</template>
<script>
export default{
  name: 'TodoEntity',
  props: {
    todo: Object
  },

  data(){
    return{
      isVisible:Boolean
    }
  },


  mounted () {
    this.isVisible=false;
  },

  methods: {
    show(){
      this.isVisible=!this.isVisible;
    }
  }
}
</script>
<style lang="css">

</style>
