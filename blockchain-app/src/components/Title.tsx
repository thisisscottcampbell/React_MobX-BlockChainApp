import React, { useState, useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

const Title: FC = observer(() => {
	const { blockchainStore } = useStore();

	return (
		<div>
			<p>Curent Blocks: </p>
			{blockchainStore.numberBlocks}
		</div>
	);
});

export default Title;
