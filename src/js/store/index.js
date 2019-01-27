import { SET_MEMBER, SET_IDTOKEN } from "./actions";
export default (() => {
  let state = {
    appName: "Gold Storage",
    member: {},
    idToken: ""
  };
  return {
    getState: () => state,
    dispatch: action => {
      switch (action.type) {
        case SET_MEMBER:
          state.member = action.member;
          break;
        case SET_IDTOKEN:
          state.idToken = action.idToken;
        default:
          break;
      }
    }
  };
})();
