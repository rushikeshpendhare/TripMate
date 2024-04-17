export const LoginStart = (userCreds)=>({
    type:"LOGIN_START",

});

export const LoginSucces = (user)=>({
    type:"LOGIN_SUCCESS",
    payload:user,
});

export const LoginFailure = ()=>({
    type:"LOGIN_FAILURE",
});
export const Logout = () => ({
    type: "LOGOUT",
  });
