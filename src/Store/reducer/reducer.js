import { LOGIN, SIGNUP } from "../actions/action";

const initialState = {
  userdata: { name: "", email: "", password: "", type: "" },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        initialState: action.payload.user,
      };
      case LOGIN:
        return{
          ...state,
          initialState: action.payload.user
        }
    default:
      return state;
  }
};

export default userReducer;
