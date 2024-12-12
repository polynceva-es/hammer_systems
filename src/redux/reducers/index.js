import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import usersReducer from './Users';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users: usersReducer
});

export default reducers;