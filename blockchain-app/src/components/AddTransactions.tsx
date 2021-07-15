import React, { useState, FC } from 'react';
import { useStore } from '../stores/store';
//const { blockchainStore } = useStore();

const AddTransactions: FC = () => {
	const [input, setInput] = useState('');
	const { blockchainStore } = useStore();

	const handleChange = (e) => setInput(e.target.value);
	const handleSubmit = {};
	return (
		<form onSubmit={}>
			<input
				type="text"
				value={input}
				onChange={handleChange}
				placeholder="message"
				required
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default AddTransactions;
