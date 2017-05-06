import {Component} from 'angular2/core';
import {CrudComponent} from './crud.component';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1><crud></crud>',
    directives:[CrudComponent]
})
export class AppComponent { }