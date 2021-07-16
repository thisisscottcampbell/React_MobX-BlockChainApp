import React, { useState, FC } from 'react';
import { useStore, store } from '../stores/store';
//const { blockchainStore } = useStore();

const AddTransactions: FC = () => {
	const [input, setInput] = useState('');
	const { blockchainStore } = useStore();

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				blockchainStore.addTransaction(input);
				setInput('');
			}}
		>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="message"
				required
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default AddTransactions;
