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

	model = new SignupModel();

	submitted = false;
	loader = false;
	signuploader = false;

	onSubmit() {
		this.loader = true;
		this.signuploader = true;

		this.userService.createUser(this.model)
	    		.then(response => {
	    			this.submitted = true;
	    			this.loader = false;
				 }, response => {
	    			this.signuploader = false;
				 });
	}

	onChange(selectedvalue) {
		this.model.setTitle(selectedvalue);
	}

	//get diagnostic() { return JSON.stringify(this.model); }
}