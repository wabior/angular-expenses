import {Injectable} from '@angular/core';
import {from, Observable, Subject} from "rxjs";
import {startWith} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    selected = 1;
    selectedStream = new Subject();

    setSelected(selected: number) {
        this.selected = selected;
        this.selectedStream.next(this.selected);
    }

    getSelected() {
        return from(
            this.selectedStream.pipe(startWith(this.selected))
        );
    }

    observable = new Observable(subscriber => {
        subscriber.next(this.selected);
    })
}
