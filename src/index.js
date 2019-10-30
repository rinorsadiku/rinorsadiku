import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import FunctionalityContext from './contexts/FunctionalityContext';
import Functionality from './utils/Functionality';

// Here we will create the context will all the values;
ReactDOM.render(
	<FunctionalityContext.Provider value={new Functionality()}>
		<App />
	</FunctionalityContext.Provider>,
	document.querySelector('#root')
);
