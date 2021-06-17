<template lang="html">
  <div>
      <h2>Login</h2>
      <div>
    <form novalidate="true" v-on:submit='login($event)'>
      <input type='email' placeholder='email' v-model='email'>
      <input type='password' placeholder='password' v-model='password'>
      <input type='submit'/>
    </form>
    <small v-if='!valid[1]'>Invalid password</small>
    <small v-if='!valid[0]'>Invalid email</small>
  </div>
  </div>
</template>
<script>
import AuthAPI from '@/services/AuthAPI.js'
import Validators from '@/utils/Validators.js';

export default({

  data () {
    return {
      valid: [true,true],
      email: null,
      password: null
    }
  },


  mounted () {
  },

  methods: {

    async login(event){
      if (this.checkForm(event)){
      const user={
        email: this.email,
        password: this.password
      }
      console.log(user);
      const response = await AuthAPI.login(user);
      console.log(response);
      }
    },

    checkForm: function(event){
      this.valid[0] = Validators.validateEmail(this.email);
      this.valid[1] = Validators.validateNotNull(this.password);
      console.log(this.valid);
      event.preventDefault();
      return this.valid[0]&&this.valid[1];
    }

    

  }
})
</script>
<style lang="css">

</style>
