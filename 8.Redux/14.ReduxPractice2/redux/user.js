export function setUserDetails(user) {
  return {
    type: "SET_USER_DETAILS",
    payload: user
  };
}

export function removeUserDetails() {
  return {
    type: "REMOVE_USER_DETAILS"
  };
}
//user here can be {}, and so remove user details will also return {}.
//but me might want to check if user is logged in or not.
//in that case null makes it easy to check
export default function userReducer(user = null, action) {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return {
        ...user,
        ...action.payload
      };
    case "REMOVE_USER_DETAILS":
      return null;
    default:
      return user;
  }
}
