<template>
  <div class="navbar">
    <nav class=" orange darken-3">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left">Geo Ninjas!</router-link>
        <ul class="right">
          <li><router-link :to="{ name: 'Signup' }">Singup</router-link></li>
          <li><router-link :to="{ name: 'Login' }">Login</router-link></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  data() {
    return {
      user: null
    }
  },
  methods: {
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    }
  },
  created() {
    // let user = firebase.auth().currentUser

    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.user = user
      } else {
        this.user = null
      }
    })
    if(user) {

    }
  }
}
</script>

<style>

</style>