import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import MapContainer from './map/map_container';

// import actions here

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router history={hashHistory}>
        <Route path='/' component={ MapContainer } />
			</Router>
		</Provider>
	);
};

export default Root;
