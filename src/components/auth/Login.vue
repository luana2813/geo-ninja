<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center orange-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" v-model="password" />
      </div>
      <p v-if="feedback" class="center red-text">{{ this.feedback }}</p>
      <div class="field center">
        <button class="btn orange darken-3">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null
    };
  },
  methods: {
    login() {
      if(this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          console.log(cred.user)
          this.$router.push({ name: 'GMap' })
        })
        .catch(err => {
          console.log(err)
          this.feedback = err.message
        })
        this.feedback = null
      } else {
        this.feedback = 'Please fill both fields'
      }
    }
  }
};
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}

.login h2 {
  font-size: 2.4em;
}

.login field {
  margin-bottom: 60px;
}
</style>