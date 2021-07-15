import { makeAutoObservable } from 'mobx';
import sha256 from 'crypto-js/sha256';
import { createContext, useContext, useEffect, FC } from 'react';

interface IBlock {
	hash: string;
	transactions: Array<string>;
}

class BlockchainStore {
	blocks: Array<IBlock> = [];
	transactions: Array<string> = [];

	constructor() {
		makeAutoObservable(this);
	}

	addTransaction(message: string) {
		this.transactions.push(message);
	}
}

const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

const StoreProvider: FC<{ store: BlockchainStore }> = ({ store, children }) => (
	<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

const useStore = () => useContext(StoreContext);

export { BlockchainStore, StoreProvider, useStore };