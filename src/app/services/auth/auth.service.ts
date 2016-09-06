import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class AuthService {
	baseUrl: String;	

	constructor() {
		let headers = new Headers();
		headers.append('Access-Control-Allow-Origin', '*');
		
		this.baseUrl = "http://localhost:8080/offerciti/";
	}

	getBaseUrl(path: string): string {
		return this.baseUrl + path;
	}
}