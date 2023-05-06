import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Expense} from "../types/expense";
import {ExpenseDto} from "../types/expense-dto";

@Injectable({
  providedIn: 'root'
})
export class ExpenseLocalService {

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

  get() {
    return this.expenses;
  };
}
