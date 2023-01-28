import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ExpenseService {

    constructor() {
    }

    expenses = [
        {
            id: 0,
            price: 109,
            name: 'internet Netia',
            paid: false
        },
        {
            id: 1,
            price: 245,
            name: 'prąd Tauton',
            paid: false
        },
        {
            id: 2,
            price: 85,
            name: 'telefon Orange',
            paid: true
        }
    ];
}
