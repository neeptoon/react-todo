import {Provider} from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {persistor, store} from './store/index';
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate lading={null} persistor={persistor}>
				<App/>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
