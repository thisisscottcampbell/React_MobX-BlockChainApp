import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { store, StoreContext } from './stores/store.ts';

ReactDOM.render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>,
	document.getElementById('root')
);
