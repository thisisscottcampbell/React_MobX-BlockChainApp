import React, { useState, useEffect, FC } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/store';

const Transactions: FC = observer(() => {
	const { blockchainStore } = useStore();

	return blockchainStore.transactions.length > 0 ? (
		<div>
			<h3>Pending Transactions</h3>
			<ul className="pending">
				{blockchainStore.transactions.map((trans, i) => (
					<li key={i}>{trans}</li>
				))}
			</ul>
		</div>
	) : (
		<h3>No Pending Transactions</h3>
	);
});

export default Transactions;
