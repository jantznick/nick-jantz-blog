import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import App from '../components/public/App.js';
import Single from '../components/public/Single.js';
import NotFound from '../components/NotFound.js';

import store from '../reducers';

const Routes = () => {
	return (
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/single" component={Single} />
				<Route path="/*" component={NotFound} />
			</Switch>
		</Provider>
	);
}

export default Routes;