import React, { useState, FC } from 'react';
import Transactions from './Transactions';
import Title from './Title';
import Blocks from './Blocks';

const Home: FC = () => {
	return (
		<div>
			<Blocks />
			<Title />
			<Transactions />
		</div>
	);
};

export default Home;
