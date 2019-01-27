import "bootstrap/dist/js/bootstrap.min.js";
import "admin-lte/dist/js/adminlte.min.js";

import App from "./views/App.vue";
import Vue from "vue";
import router from "./router";
import store from "./store";
import { setMember, setIdToken } from "./store/actions";
import auth from "./services/AuthService";
import MemberService from "./services/MemberService";

auth.onAuthStateChanged(user => {
  if (user) {
    auth.currentUser.getIdToken().then(idToken => {
      store.dispatch(setIdToken(idToken));
      MemberService(idToken)
        .find(user.uid)
        .then(member => {
          store.dispatch(setMember(member));
        });
    });
  } else {
    window.location.href = "../login";
  }
});

Vue.config.productionTip = false;

const app = new Vue({
  router,
  data: store,
  render: h => h(App)
}).$mount("#app");
