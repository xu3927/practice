import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ChildComponent} from './child.component';
import {TypescriptPractice} from './typescriptPractice';

@NgModule({
    declarations: [
        AppComponent,
        ChildComponent,
        TypescriptPractice
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
