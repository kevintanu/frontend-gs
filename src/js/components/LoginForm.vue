<template>
  <form class="form-signin">
    <img class="mb-4" src="img/chest.png" alt width="72" height="72">
    <h1 class="h3 mb-3 font-weight-normal">Silahkan Masuk</h1>
    <label for="inputEmail" class="sr-only">Email</label>
    <input
      v-model="email"
      type="email"
      id="inputEmail"
      class="form-control"
      placeholder="Email"
      required
      autofocus
    >
    <label for="inputPassword" class="sr-only">Password</label>
    <input
      v-model="password"
      type="password"
      id="inputPassword"
      class="form-control"
      placeholder="Password"
      required
    >
    <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
    </div>-->
    <button v-on:click="signIn" class="btn btn-lg btn-primary btn-block" type="submit">Masuk</button>
    <p class="mt-5 mb-3 text-muted">by wortel &copy; 2019</p>
  </form>
</template>

<script>
import { auth, signIn } from "../services/AuthService";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function(e) {
      e.preventDefault();
      const { email, password } = this;
      signIn(email, password)
        .then(user => {})
        .catch(function(error) {
          const errorMessage = error.message;
          alert(errorMessage);
        });
    }
  },
  mounted() {
    auth.onAuthStateChanged(function(user) {
      if (user) {
        window.location.href = "./admin.html";
      } else {
      }
    });
  }
};
</script>

<style>
</style>
