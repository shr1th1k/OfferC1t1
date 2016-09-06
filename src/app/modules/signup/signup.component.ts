import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

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

	//ngOnInit(): void {
	//	this.userService.createUser();
	//}
	
}