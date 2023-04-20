import { Component } from '@angular/core';
import {ExpenseService} from "../../../../services/expense.service";
import {MenuService} from "../../../../services/menu.service";
import {Expense} from "../../../../types/expense";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

    constructor(private expense: ExpenseService, private selectedMenu: MenuService) {}

    expenses: Expense[] | undefined;

    ngOnInit() {
        this.selectedMenu.getSelected().subscribe();
        this.expense.getFromApi().subscribe(data => {
            this.expenses = [ ...data ];
        });
    }
}
