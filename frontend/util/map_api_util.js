import $ from 'jquery';

export const fetchLocations = function(success){
  $.ajax({
    method: 'GET',
    url: '/api/locations',
    success
  });
};


export const generateMap = (locations) => {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.773972, lng: -122.431297},
    zoom: 13
  });


  const addInfo = (property, location) => {
    if (location[property]) {
      return `<p><strong>${property}:</strong> ${location[property]}</p>`;
    } else {
      return '';
    }
  };

  var infowindow = new google.maps.InfoWindow();
  locations.forEach(location => {

    var contentString =
    `<div id="content">`+
      `<div id="siteNotice">`+
      `</div>`+
      `<h1 id="firstHeading" class="firstHeading">
        ${location.Title} (${location.Release_Year})
      </h1>`+
      `<div id="bodyContent">`+
        addInfo('Location', location) +
        addInfo('Fun_Facts', location) +
        addInfo('Distributor', location) +
        addInfo('Director', location) +
        `<p><strong>Cast:</strong>
          ${location.Actor_1 ? location.Actor_1 : ''}
          ${location.Actor_2 ? ', ' + location.Actor_2 : ''}
          ${location.Actor_3 ? ', ' + location.Actor_3 : ''}
        </p>`+
        addInfo('Writer', location) +
      `</div>`+
    `</div>`;


    let marker = new google.maps.Marker({
      map: map,
      position: {lat: parseFloat(location.Latitude),
        lng: parseFloat(location.Longitude)}
    });

    marker.addListener('mouseover', function() {
      infowindow.setContent(contentString);
      infowindow.open(this.map, marker);
    });
  });
};
