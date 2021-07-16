import React, { useState, FC } from 'react';
import Transactions from './Transactions';
import Blocks from './Blocks';

const Home: FC = () => {
	return (
		<div>
			<Blocks />
			<Transactions />
		</div>
	);
};

export default Home;
