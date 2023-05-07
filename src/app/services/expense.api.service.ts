import {Injectable} from '@angular/core';
import {Expense, IExpenseForm} from "../types/expense";
import {ExpenseDto} from "../types/expense-dto";
import {ApiService} from "./api.service";
import {ExpenseStorageInterface} from "../types/expense-storage-interface";
import {from, Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ExpenseApiService implements ExpenseStorageInterface {

    expensesStream = new Subject();

    constructor(private api: ApiService) {
        console.log('ExpenseApiService')
    }

    add(expense: ExpenseDto | Expense) {
        this.api.create(expense).subscribe(() => this.updateView())
    }

    public get() {
        return this.api.get();
    }

    updateView() {
        this.get().subscribe(data => this.expensesStream.next(data));
    }

}
