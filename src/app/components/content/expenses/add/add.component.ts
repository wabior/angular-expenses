import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.scss']
})
export class AddComponent {
    name = new FormControl;
    amount = new FormControl;
    paid = new FormControl;
    adding = false;

    onAdding(e: any){
        this.adding = !this.adding;
        console.log(this.adding);
    }
}
