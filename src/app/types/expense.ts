import {FormControl} from "@angular/forms";

export interface Expense {
    id?: number,
    price?: number,
    name: string,
    paid?: boolean
}

export interface IExpenseForm {
    name: FormControl<string>;
    price: FormControl<number>;
    paid: FormControl<boolean>;
}
