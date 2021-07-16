import { BlockchainStore } from './BlockchainStore';
import { createContext, useContext, useEffect } from 'react';

//***leave store interface */
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
