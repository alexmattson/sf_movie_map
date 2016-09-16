import { connect } from 'react-redux';
import Map from './map';
// Actions
import { requestLocations,
       } from '../../actions/map_actions';

const mapStateToProps = state => ({
  locations: state.locations
});

const mapDispatchToProps = dispatch => ({
  requestLocations: () => dispatch(requestLocations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
