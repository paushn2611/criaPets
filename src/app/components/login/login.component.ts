import { Component } from '@angular/core';

@Component({
	selector: 'login',
	templateUrl: './login.template.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent {
	title: string = 'app';
	view: boolean = true;

	changeView (status) {
		this.view = status;
	}
}