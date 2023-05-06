import {Component} from '@angular/core';
import {MenuService} from "./services/menu.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    protected selected: any = 1;

    constructor(private menu: MenuService) {
        this.menu.getSelected().subscribe(selected => {
            return this.selected = selected;
        })
    }

}
