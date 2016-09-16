import { applyMiddleware } from 'redux';

//Import middleware
import MapMiddleware from './map_middleware';

const masterMiddleware = applyMiddleware(
  MapMiddleware
);

export default masterMiddleware;
