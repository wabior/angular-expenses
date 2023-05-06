import {Component} from '@angular/core';
import {ExpenseService} from "src/app/services/expense.service";
import {MenuService} from "src/app/services/menu.service";
import {Expense} from "src/app/types/expense";
import {ExpenseApiService} from "../../../../services/expense.api.service";

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent {
    set expenses(value: Expense[] | undefined) {
        this._expenses = value;
    }

    get expenses(): Expense[] | undefined {
        return this._expenses;
    }

    private _expenses: Expense[] | undefined;

    constructor(private expenseService: ExpenseApiService) {}

    ngOnInit() {
        this.expenseService.get().subscribe(data => this.expenses = data);
    }

}
