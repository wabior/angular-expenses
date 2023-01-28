import {Component} from '@angular/core';
import {from, Observable, Subject} from "rxjs";
import {startWith} from "rxjs/operators";
import {MenuService} from "./services/menu.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data = {
        header: "New test",
        data: {
            text: "New text for test"
        }
    };

    constructor(private menu: MenuService) {
    }

    selected = this.menu.getSelected();

    setSelected(selected: number) {
        this.menu.setSelected(selected);
    }

    ngOnInit() {
        this.menu.getSelected().subscribe(selected => console.log(selected))
    }
}
