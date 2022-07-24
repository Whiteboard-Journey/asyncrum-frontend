import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Whiteboard from './whiteboard/reducers';

export default combineReducers({
    Auth,
    Layout,
    Whiteboard
});
