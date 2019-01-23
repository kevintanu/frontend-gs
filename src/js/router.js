import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import BankAccount from "./components/BankAccount.vue";
import Users from "./components/Users.vue";

export default new VueRouter({
  routes: [
    { path: "/", component: Dashboard },
    { path: "/bank-account", component: BankAccount },
    { path: "/users", component: Users }
  ],
  linkActiveClass: "active"
});
