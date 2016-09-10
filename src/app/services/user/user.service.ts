import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
	path: string;
	constructor(private authService: AuthService, private http: Http) {
		this.path = this.authService.getBaseUrl('user/create')
	}

	createUser(model: any): Promise<any> {
		if (model.cpassword) {
			delete model.cpassword;
		}
		
		model.status = 1;

	    let body = JSON.stringify(model);
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

	    return this.http.post(this.path, body, options)
	    		.toPromise();

	}
}