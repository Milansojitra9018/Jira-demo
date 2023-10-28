export const SIGNUP = 'SIGNUP';
export const LOGIN ="LOGIN"

export const signup = (user) => {
  return {
    type: SIGNUP,
    payload: user,
  };
};

export const login = (user) => {
  return{
    type: LOGIN,
    payload: user,
  }
}
