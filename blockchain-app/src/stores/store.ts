//import { makeAutoObservable } from 'mobx';
import { BlockchainStore } from './BlockchainStore';
// import sha256 from 'crypto-js/sha256';
import { createContext, useContext, useEffect } from 'react';

interface Store {
	blockchainStore: BlockchainStore;
}

//this goes in index
export const store: Store = {
	blockchainStore: new BlockchainStore(),
};

//this goes in index
export const StoreContext = createContext(store);

//this goes in App
export function useStore() {
	return useContext(StoreContext);
}

// interface IBlock {
// 	hash: string;
// 	transactions: Array<string>;
// }

// class BlockchainStore {
// 	blocks: Array<IBlock> = [];
// 	transactions: Array<string> = [];

// 	constructor() {
// 		makeAutoObservable(this);
// 	}

// 	addTransaction(message: string) {
// 		this.transactions.push(message);
// 	}
// }

// const StoreContext = createContext<BlockchainStore>(new BlockchainStore());

// const StoreProvider: FC<{ store: BlockchainStore }> = ({ store, children }) => (
// 	<StoreContext.Provider value={store}>{children}</StoreContext.Provider>
// );

// const useStore = () => useContext(StoreContext);

// export { BlockchainStore, StoreProvider, useStore };
