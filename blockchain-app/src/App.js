import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from './stores/store';
import './App.css';
import Home from './components/Home';
import AddTransactions from './components/AddTransactions';

const App = () => {
	const { blockchainStore } = useStore();

	useEffect(() => {
		const updateBlock = () =>
			setInterval(() => blockchainStore.writeBlock(), 5000);
		updateBlock();
		return () => clearInterval(updateBlock);
	}, []);

	return (
		<div className="App">
			<h1>MobX Blockchain App</h1>
			<Home />
			<AddTransactions />
		</div>
	);
};

export default App;
