import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import FunctionalityContext from './contexts/FunctionalityContext';
import Functionality from './utils/Functionality';

const container = document.querySelector('#root');

if (!container) {
	throw new Error('Root container #root was not found in the document');
}

// Here we will create the context with all the values
createRoot(container).render(
	<StrictMode>
		<FunctionalityContext.Provider value={new Functionality()}>
			<App />
		</FunctionalityContext.Provider>
	</StrictMode>
);
