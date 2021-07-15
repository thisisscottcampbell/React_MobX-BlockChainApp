import { BlockchainStore } from '../BlockchainStore';

export interface IBlock {
	hash: string;
	transactions: Array<string>;
}
