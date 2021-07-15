import './App.css';
import { useStore } from './stores/store';

function App() {
	const { blockchainStore } = useStore();

	console.log(blockchainStore);
	return <div className="App">I am app</div>;
}

export default App;
