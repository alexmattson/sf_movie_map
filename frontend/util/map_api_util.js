import $ from 'jquery';

export const fetchLocations = function(success){
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    success
  });
};
