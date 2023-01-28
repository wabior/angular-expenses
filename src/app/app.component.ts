import {Component} from '@angular/core';
import {MenuService} from "./services/menu.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private menu: MenuService) {
        this.menu.getSelected().subscribe(selected => {
            return this.selected = selected;
        })
    }

    selected: any = 1;
}
