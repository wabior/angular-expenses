import { Component } from '@angular/core';
import {ExpenseService} from "../../../../services/expense.service";
import {AppComponent} from "../../../../app.component";
import {MenuService} from "../../../../services/menu.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {

    expenses = this.expense.expenses;

    constructor(private expense: ExpenseService, private selectedMenu: MenuService) {}

    ngOnInit() {
        this.selectedMenu.getSelected().subscribe(selected => console.log('show', selected));
    }
}
