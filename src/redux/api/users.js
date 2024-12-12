import axios from 'axios';
import { GET_USERS_SUCCESS } from 'redux/constants/Users';
import store from 'redux/store';
const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const getUsers = async () => {
  await axios.get(`${BASE_URL}/users`)
  .then(res => store.dispatch({ type: GET_USERS_SUCCESS, payload: res }))
  .catch(err => console.log(err))
  
};