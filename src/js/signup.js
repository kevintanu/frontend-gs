import auth from "./services/AuthService";
import { createMember } from "./services/MemberService";
import {
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_PASSCODE,
  SET_GROUP_ID,
  setUsername,
  setEmail,
  setPassword,
  setPasscode,
  setGroupId
} from "./store/actions";

// const {
//   setUsername,
//   getEmail,
//   setEmail,
//   getPassword,
//   setPassword,
//   setPasscode,
//   getMember
// } = (() => {
//   let username = "";
//   let email = "";
//   let password = "";
//   let passcode = "";
//   return {
//     setUsername: n => (username = n),
//     getEmail: () => email,
//     setEmail: e => (email = e),
//     getPassword: () => password,
//     setPassword: p => (password = p),
//     setPasscode: p => (passcode = p),
//     getMember: () => ({
//       username: username,
//       email: email,
//       passcode: passcode,
//       roleId: 1
//     })
//   };
// })();

const store = (() => {
  let state = {
    username: "",
    email: "",
    password: "",
    passcode: "",
    groupId: 0
  };
  return {
    getState: () => state,
    dispatch: action => {
      switch (action.type) {
        case SET_USERNAME:
          state.username = action.username;
          break;
        case SET_EMAIL:
          state.email = action.email;
          break;
        case SET_PASSWORD:
          state.password = action.password;
          break;
        case SET_PASSCODE:
          state.passcode = action.passcode;
          break;
        case SET_GROUP_ID:
          state.groupId = action.groupId;
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

addListener("inputUsername", "input", e => {
  store.dispatch(setUsername(e.target.value));
});

addListener("inputEmail", "input", e => {
  store.dispatch(setEmail(e.target.value));
});

addListener("inputPassword", "input", e => {
  store.dispatch(setPassword(e.target.value));
});

addListener("inputPasscode", "input", e => {
  store.dispatch(setPasscode(e.target.value));
});

addListener("inputGroup", "input", e => {
  store.dispatch(setGroupId(e.target.value));
});

addListener("formSignUp", "submit", e => {
  e.preventDefault();
  const member = {
    username: store.getState().username,
    email: store.getState().email,
    passcode: store.getState().passcode,
    roleId: 1,
    GroupId: store.getState().groupId
  };

  // const { email, password } = store.getState();
  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then(user => {
  //     auth.currentUser.getIdToken(true).then(idToken => {

  //       createMember(member, idToken).then(res => {
  //         console.log("user created successfully", res);
  //         auth.signOut();
  //       });
  //     });
  //   })
  //   .catch(err => {
  //     const errorMessage = err.message;
  //     alert(errorMessage);
  //   });
});
