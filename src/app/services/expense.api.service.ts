import {Injectable} from '@angular/core';
import {Expense, IExpenseForm} from "../types/expense";
import {ExpenseDto} from "../types/expense-dto";
import {ApiService} from "./api.service";
import {ExpenseStorageInterface} from "../types/expense-storage-interface";

@Injectable({
    providedIn: 'root'
})
export class ExpenseApiService implements ExpenseStorageInterface {

    constructor(private api: ApiService) {}

    add(expense: ExpenseDto | Expense) {

        this.api.create(expense).subscribe();
     }

    get() {
        return this.api.get()
    }

}
