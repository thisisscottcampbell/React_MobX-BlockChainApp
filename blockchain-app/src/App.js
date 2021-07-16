import './App.css';
import Home from './components/Home';
import AddTransactions from './components/AddTransactions';

function App() {
	return (
		<div className="App">
			MobX Blockchain App
			<AddTransactions />
			<Home />
		</div>
	);
}

export default App;
