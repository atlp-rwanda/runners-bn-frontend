import { combineReducers } from 'redux';
import {
  getRequestReducer,
  createRequestReducer,
  editRequestReducer,

} from './requestReducer';

const rootReducer = combineReducers({
  getRequestReducer,
  createRequestReducer,
  editRequestReducer,
});

export default rootReducer;
