import {Component, EventEmitter, Output} from '@angular/core';
import {MenuService} from "src/app/services/menu.service";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    constructor(private menu: MenuService) {
    }

    navItems = ['Home', 'Wydatki', 'Podsumowanie'];
    // selected = this.menu.selected;
    selected = this.menu.selected;

    select(value: number) {
        this.menu.setSelected(value);
    }
}
