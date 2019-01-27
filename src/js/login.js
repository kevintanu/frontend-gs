import auth from "./services/AuthService";
import {
  SET_EMAIL,
  SET_PASSWORD,
  setEmail,
  setPassword
} from "./store/actions";

const store = (() => {
  let state = {
    email: "",
    password: ""
  };
  return {
    getState: () => state,
    dispatch: action => {
      switch (action.type) {
        case SET_EMAIL:
          state.email = action.email;
          break;
        case SET_PASSWORD:
          state.password = action.password;
          break;
        default:
          break;
      }
    }
  };
})();

const addListener = (elementId, type, listener) => {
  document.getElementById(elementId).addEventListener(type, listener);
};

auth.onAuthStateChanged(function(user) {
  if (user) {
    window.location.href = "../admin";
  } else {
  }
});

addListener("inputEmail", "input", e => {
  store.dispatch(setEmail(e.target.value));
});

addListener("inputPassword", "input", e => {
  store.dispatch(setPassword(e.target.value));
});

addListener("formSignIn", "submit", e => {
  e.preventDefault();
  const { email, password } = store.getState();
  auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {})
    .catch(err => {
      alert(err.message);
    });
});
