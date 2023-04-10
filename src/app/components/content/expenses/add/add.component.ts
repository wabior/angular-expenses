import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpenseService} from "../../../../services/expense.service";
import {IExpenseForm} from "../../../../types/expense";
import {ExpenseDto} from "../../../../types/expense-dto";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})

export class AddComponent {
    private _adding: boolean = false;
    get adding(): boolean {
        return this._adding;
    }

    set adding(value: boolean) {
        this._adding = value;
    }

    onAdding(e: boolean) {
        this._adding = !this._adding;
    }

    constructor(private expense: ExpenseService) {
    }

    expenseForm = new FormGroup<IExpenseForm>({
        name: new FormControl('', {
            nonNullable: true,
            validators: [ Validators.required, Validators.minLength(2) ]
        }),
        price: new FormControl(0, {
            nonNullable: true,
            validators: [ Validators.required,  Validators.pattern('^(\\d+(?:[\\.\\,]\\d{2})?)$') ]
        }),
        paid: new FormControl(false, {nonNullable: true}),
    })

    get name() { return this.expenseForm.get('name'); }

    onSubmit() {
        const expenseDto = new ExpenseDto(this.expenseForm.value);
        this.expense.add(expenseDto);
    }
}
