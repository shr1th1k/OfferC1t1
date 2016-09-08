import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

import { SignupModel } from '../../modules/signup/signup.model';

@Component({
	templateUrl: 'app/modules/signup/signup.component.html',
	styles: [`
		.mainbox  {
			min-height: 540px;
			margin-top: 50px;
		}
	`],
	providers: [ UserService, AuthService ]
})
export class SignupComponent {

	constructor(private userService: UserService) {}

	model = new SignupModel({
		firstName: "", 
		lastName: "", 
		email: "", 
		password: "", 
		cpassword: "", 
		contactNumber: "", 
		gender: "", 
		dob: "", 
		area: ""
	});

	submitted = false;

	active = true;

	onSubmit() {
		this.submitted = true;
		/*this.active = false;
		setTimeout(() => this.active = true, 0);*/
		this.userService.createUser(this.model);
	}

	get diagnostic() { return JSON.stringify(this.model); }

}