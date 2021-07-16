import React from 'react';
import Title from './Title';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

const Blocks = observer(() => {
	const { blockchainStore } = useStore();
	const orderedBlocks =
		blockchainStore.blocks.length > 1
			? [...blockchainStore.blocks].reverse()
			: blockchainStore.blocks;
	const renderBlocks = orderedBlocks.map((block) => (
		<li key={block.hash}>
			<h3>{block.hash}</h3>
			<pre>{JSON.stringify(block.transactions, null, 2)}</pre>
		</li>
	));

	return (
		<div>
			<Title />
			<ul className="blocks">{renderBlocks}</ul>
		</div>
	);
});

export default Blocks;
