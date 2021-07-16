import { makeAutoObservable } from 'mobx';
import { IBlock } from './Types/interfaces';
import sha256 from 'crypto-js/sha256';

export class BlockchainStore {
	blocks: Array<IBlock> = [];
	transactions: Array<string> = [];

	constructor() {
		makeAutoObservable(this);
	}

	get numberBlocks() {
		return this.blocks.length;
	}

	get validate() {
		return this.blocks.every((block, index) => {
			const prevBlock = this.blocks[index - 1] ?? { hash: '' };
			const hash = sha256(
				`${prevBlock.hash}${JSON.stringify(block.transactions)}`
			).toString();
			return hash === block.hash;
		});
	}

	addTransaction(message: string) {
		this.transactions.push(message);
	}

	writeBlock() {
		if (this.transactions.length === 0) return;

		const transactions = [...this.transactions];
		this.transactions = [];

		const prevBlock = this.blocks[this.blocks.length - 1] ?? { hash: '' };
		const hash = sha256(
			`${prevBlock.hash}${JSON.stringify(transactions)}`
		).toString();

		this.blocks.push({
			hash,
			transactions,
		});
	}
}
