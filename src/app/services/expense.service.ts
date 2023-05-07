import {Injectable} from '@angular/core';
import {Expense, IExpenseForm} from "../types/expense";
import {ExpenseDto} from "../types/expense-dto";
import {ApiService} from "./api.service";
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {
    expensesStream = new Subject();

    constructor(private api: ApiService) {
        console.log('ExpenseService')
    }

    private expenses: Expense[] = [
        {
            price: 109,
            name: 'internet Netia',
            paid: false
        },
        {
            price: 245,
            name: 'prąd Tauton',
            paid: false
        },
        {
            price: 85,
            name: 'telefon Orange',
            paid: true
        }
    ];

    add(expense: ExpenseDto | Expense) {
        this.expenses.push(expense);
        console.log('expense service: ', this.expenses)
    }

    public get() {
        return this.api.get()
    }

}
