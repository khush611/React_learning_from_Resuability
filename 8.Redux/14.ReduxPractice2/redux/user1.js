//user.js that i altered and which seems to work
export function addFirstName(firstname) {
  return {
    type: "ADD_FIRST_NAME",
    payload: firstname
  };
}
export function addLastName(lastname) {
  return {
    type: "ADD_LAST_NAME",
    payload: lastname
  };
}
export function addId(id) {
  return {
    type: "ADD_ID",
    payload: id
  };
}
export function addEmail(email) {
  return {
    type: "ADD_EMAIL",
    payload: email
  };
}

const initialState = {
  firstName: "",
  lastName: "",
  id: "",
  email: ""
};
export default function userReducer(user = initialState, action) {
  switch (action.type) {
    case "ADD_FIRST_NAME":
      return {
        ...user,
        firstName: action.payload
      };
    case "ADD_LAST_NAME":
      return {
        ...user,
        lastName: action.payload
      };
    case "ADD_ID":
      return {
        ...user,
        id: action.payload
      };
    case "ADD_EMAIL":
      return {
        ...user,
        email: action.payload
      };
    default:
      return user;
  }
}
