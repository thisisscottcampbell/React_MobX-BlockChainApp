import React, { useState, useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

const Title: FC = observer(() => {
	const { blockchainStore } = useStore();

	return (
		<div>
			<h4>Total Blocks: {blockchainStore.numberBlocks}</h4>
			<h5>Status: {blockchainStore.validate ? 'Valid' : 'Invalid'}</h5>
		</div>
	);
});

export default Title;
