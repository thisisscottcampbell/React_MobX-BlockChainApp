import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BlockchainStore, StoreProvider } from './store/store.tsx';

const store = new BlockchainStore();

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
