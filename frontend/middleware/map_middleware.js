// Map API Util
import { fetchLocations,
       } from '../util/map_api_util';
// Map Action
import { requestLocations,
         receiveLocations,
// Map Constants
        REQUEST_LOCATIONS,
       } from '../actions/map_actions';

 export default ({getState, dispatch}) => next => action => {
   const locationsSuccess = data => dispatch(receiveLocations(data));
  //  const mapErrored = data => dispatch(mapError(data.responseJSON));
   switch(action.type){
     case REQUEST_LOCATIONS:
       fetchLocations(locationsSuccess);
       return next(action);
     default:
       return next(action);
   }
 };
