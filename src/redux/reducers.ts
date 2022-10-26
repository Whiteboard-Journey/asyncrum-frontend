import { combineReducers } from 'redux';
import Auth from './auth/reducers';
import Layout from './layout/reducers';
import Team from './team/reducers';

export default combineReducers({
  Auth,
  Layout,
  Team
});
