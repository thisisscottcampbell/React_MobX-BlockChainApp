import { makeAutoObservable } from 'mobx';

interface IBlock {
	hash: string;
	transactions: Array<string>;
}

export class BlockchainStore {
	blocks: Array<IBlock> = [];
	transactions: Array<string> = [];

	constructor() {
		makeAutoObservable(this);
	}

	addTransaction(message: string) {
		this.transactions.push(message);
	}
}
