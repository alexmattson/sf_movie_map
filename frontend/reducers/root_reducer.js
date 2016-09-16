import { combineReducers } from 'redux';

//Import reducers
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  locations: MapReducer
});

export default RootReducer;
