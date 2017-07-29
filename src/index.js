import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import App from './App';
import './index.css';

let startTime = 0;

let updateTime = () => {
	startTime = 1+startTime
}

let store = createStore(Reducers);

setInterval(() => {
	updateTime();

	render(
	  	<Provider store={store}>
			<App elapsed={startTime} />
		</Provider>,
	  document.getElementById('root')
	);

}, 1000);

