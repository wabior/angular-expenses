import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
    navItems = ['Home', 'Wydatki', 'Podsumowanie'];
    selected = 0;
    @Output() setSelectedEvent = new EventEmitter<number>();

    select(value: number) {
        this.setSelectedEvent.emit(value);
    }
}
