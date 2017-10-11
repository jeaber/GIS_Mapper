import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SheetJSComponent } from './sheetjs.component';


import { Component } from '@angular/core';
import { AngularDraggableModule } from 'angular2-draggable';
@Component({
	selector: 'app-root',
	template: `<sheetjs></sheetjs>`
})
export class AppComponent {
	title = 'test';
}

@NgModule({
	declarations: [
		SheetJSComponent,
		AppComponent
	],
	imports: [
		BrowserModule,
		AngularDraggableModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
