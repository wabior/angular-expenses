import {Expense} from "./expense";

export class ExpenseDto {
    public name: string;
    public price: number;
    public paid: boolean;

    constructor(data: Partial<Expense>) {
        this.name = data.name ?? 'unnamed';
        this.price = data.price ?? 0;
        this.paid = data.paid ?? false;

        console.log('dto', data)
    }
}
