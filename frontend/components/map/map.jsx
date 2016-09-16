import React from 'react';
import {merge, uniqBy} from 'lodash';

import Search from './search';
import { generateMap } from '../../util/map_api_util';

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.updateMap = this.updateMap.bind(this);
    // this.generateMap = this.generateMap.bind(this);
  }

  componentDidMount() {
    this.props.requestLocations();
  }

  componentWillReceiveProps(newProps) {
    generateMap(newProps.locations);
  }

  updateMap() {
    let val = $('#search')[0].value;
    let locations = this.props.locations.filter((location) => {
      let result = JSON.stringify(location).indexOf(val);
      return (result !== -1);
    });
    generateMap(locations);
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
