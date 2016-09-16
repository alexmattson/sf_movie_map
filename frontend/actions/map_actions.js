export const REQUEST_LOCATIONS = "REQUEST_LOCATIONS";
export const RECEIVE_LOCATIONS = "RECEIVE_LOCATIONS";
export const MAP_ERROR = "MAP_ERROR";

export const requestLocations = () => ({
  type: REQUEST_LOCATIONS
});

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
});

export const mapError = error => ({
  type: MAP_ERROR,
  error
});
