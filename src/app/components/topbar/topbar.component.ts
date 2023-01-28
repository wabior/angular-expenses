import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataTopbar} from "../../types/data-topbar";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styles: []
})
export class TopbarComponent {
    @Input() data: DataTopbar = {header: '', data: {text: ''}};

    @Output() setSelectedEvent = new EventEmitter<number>();

    setSelected(value: number) {
        this.setSelectedEvent.emit(value);
    }
}
