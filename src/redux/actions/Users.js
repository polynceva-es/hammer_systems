import {SHOW_LOADING, GET_USERS_REQUEST, GET_USERS_SUCCESS} from "../constants/Users"


export const getUsersRequest = () => ({
  type: GET_USERS_REQUEST
});

export const getUsersSuccess = items => ({
  type: GET_USERS_SUCCESS,
  payload: { items }
});


export const showLoading = () => {
    return {
      type: SHOW_LOADING,
    };
  };