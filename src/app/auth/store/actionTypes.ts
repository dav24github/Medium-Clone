export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current failure',

  UPDATE_CURRENT_USER = '[Auth] Update current user',
  UPDATE_CURRENT_USER_SUCCESS = '[Auth] Update current success',
  UPDATE_CURRENT_USER_FAILURE = '[Auth] Update current failure',

  LOGOUT = '[Auth] LOGOUT',
}
