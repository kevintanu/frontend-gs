export const SET_USERNAME = "SET_USERNAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";
export const SET_PASSCODE = "SET_PASSCODE";
export const SET_GROUP_ID = "SET_GROUP_ID";
export const SET_MEMBER = "SET_MEMBER";
export const SET_IDTOKEN = "SET_IDTOKEN";

export const setUsername = username => ({
  type: SET_USERNAME,
  username
});

export const setEmail = email => ({
  type: SET_EMAIL,
  email
});

export const setPassword = password => ({
  type: SET_PASSWORD,
  password
});

export const setPasscode = passcode => ({
  type: SET_PASSCODE,
  passcode
});

export const setGroupId = groupId => ({
  type: SET_GROUP_ID,
  groupId
});

export const setMember = member => ({
  type: SET_MEMBER,
  member
});

export const setIdToken = idToken => ({
  type: SET_IDTOKEN,
  idToken
});
