import './App.css';
import Home from './components/Home';
import AddTransactions from './components/AddTransactions';

function App() {
	return (
		<div className="App">
			Pending Transactions
			<Home />
			<AddTransactions />
		</div>
	);
}

export default App;
