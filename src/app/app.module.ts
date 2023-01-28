import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';
import {NavigationComponent} from './components/topbar/navigation/navigation.component';
import {ContentComponent} from './components/content/content.component';
import {ShowComponent} from './components/content/expenses/show/show.component';
import {AddComponent} from './components/content/expenses/add/add.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        TopbarComponent,
        NavigationComponent,
        ContentComponent,
        ShowComponent,
        AddComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
