import {Expense} from "./expense";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ExpenseDto {
    public name: string = 'unnamed';
    public price: number = 0;
    public paid: boolean = false;

    get(data: Partial<Expense>): ExpenseDto {
        this.name = data.name ?? 'unnamed';
        this.price = data.price ?? 0;
        this.paid = data.paid ?? false;
        console.log('dto get: ', data)

        return this;
    }
}
