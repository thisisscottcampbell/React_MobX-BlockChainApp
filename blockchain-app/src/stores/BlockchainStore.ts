import { makeAutoObservable } from 'mobx';
import { IBlock } from './Types/interfaces';

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
