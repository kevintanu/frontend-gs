import "admin-lte/dist/css/adminlte.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "admin-lte/dist/js/adminlte.min.js";

import { auth } from "./services/AuthService";
import App from "./views/App.vue";
import Vue from "vue";
import router from "./router";

auth.onAuthStateChanged(function(user) {
  if (user) {
  } else {
    window.location.href = "./login.html";
  }
});

const app = new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
