import React from 'react';
import {merge, uniqBy} from 'lodash';

import Search from './search';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.updateMap = this.updateMap.bind(this);
    this.generateMap = this.generateMap.bind(this);
  }

  componentDidMount() {
    this.props.requestLocations();
  }

  componentWillReceiveProps(newProps) {
    this.generateMap(newProps.locations);
  }

  updateMap() {
    let val = $('#search')[0].value;
    let locations = this.props.locations.filter((location) => {
      let result = JSON.stringify(location).indexOf(val);
      return (result !== -1);
    });
    this.generateMap(locations);
  }

  generateMap(locations) {
    this.map = new google.maps.Map(document.getElementById('map'), {
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
        map: this.map,
        position: {lat: parseFloat(location.Latitude),
          lng: parseFloat(location.Longitude)}
      });

      marker.addListener('mouseover', function() {
        infowindow.setContent(contentString);
        infowindow.open(this.map, marker);
      });
    });
  }


  render() {
    return(
      <div>
          <Search locations={this.props.locations}
            updateMap={this.updateMap}/>
        <div id="map" className='map'></div>
      </div>
    );
  }
}

export default Map;
