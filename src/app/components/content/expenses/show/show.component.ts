import { Component } from '@angular/core';
import {ExpenseService} from "../../../../services/expense.service";
import {MenuService} from "../../../../services/menu.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

    constructor(private expense: ExpenseService, private selectedMenu: MenuService) {}

    expenses = this.expense.expenses;

    ngOnInit() {
        this.selectedMenu.getSelected().subscribe(selected => console.log('show', selected));
        console.log('show expenses', this.expenses)
    }
}
