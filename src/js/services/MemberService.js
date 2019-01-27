import apiConfig from "../configs/apiConfig";

const apiURL = apiConfig.url;

export default idToken => ({
  find: uid => {
    return fetch(apiURL.concat("/members/", uid), {
      method: "GET",
      headers: { Authorization: "Bearer " + idToken }
    }).then(res => res.json());
  }
});

// const createMember = (member = {}, idToken) => {
//   return fetch(apiURL.concat("/members"), {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: "Bearer " + idToken
//     },
//     body: JSON.stringify(member)
//   }).then(res => res.json());
// };
