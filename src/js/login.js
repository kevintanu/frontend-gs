import "bootstrap/dist/css/bootstrap.min.css";
import "../css/signin.css";
import Vue from "vue";

import LoginForm from "./components/LoginForm.vue";

const form = new Vue({
  render: h => h(LoginForm)
}).$mount("#login-form");
