import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
	
	constructor(private authService: AuthService, private http: Http) {}

	createUser(): void {
		this.http.get(this.authService.getBaseUrl('users'))
		 .toPromise()
		 .then(response => { 
		 	if (response) {
		 		console.log(response.json().data); 	
		 	}
		 });
	}
}