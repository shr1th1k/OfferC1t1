import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	templateUrl: 'app/modules/login/login.component.html',
	styleUrls: [ 'app/modules/login/login.component.css'],
	providers: [ UserService, AuthService ]
})
export class LoginComponent implements OnInit {

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		//this.userService.createUser();
	}

}