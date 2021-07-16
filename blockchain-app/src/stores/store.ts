import { BlockchainStore } from './BlockchainStore';
import { createContext, useContext, useEffect } from 'react';

//***leave store interface */
interface Store {
	blockchainStore: BlockchainStore;
}

//declare and export 'store' object to implement in index.js
export const store: Store = {
	blockchainStore: new BlockchainStore(),
};

//create Context for 'store', wrap around <App /> in index.js
export const StoreContext = createContext(store);

//hook to be used in components to access Store
export function useStore() {
	return useContext(StoreContext);
}
