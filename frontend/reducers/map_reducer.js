import { RECEIVE_LOCATIONS,
         MAP_ERROR
       } from '../actions/map_actions';
import merge from 'lodash/merge';


const MapsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_LOCATIONS:
      return action.locations;
    case MAP_ERROR:
      alert(action.error);
    default:
      return state;
  }
};

export default MapsReducer;
