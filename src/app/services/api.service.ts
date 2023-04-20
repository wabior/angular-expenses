import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Expense} from "../types/expense";

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl = 'http://localhost:3000/expenses';

    constructor(private http: HttpClient) { }

    get() {
        return this.http.get<Expense[]>(this.apiUrl);
    }
}
