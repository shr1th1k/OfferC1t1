import { Component } from '@angular/core';
import { SimpleSelectBoxComponent } from '../../shared/components/selectbox/selectbox.component';

@Component({
	selector: 'offerciti-header',
	templateUrl: 'app/modules/header/header.component.html',
	styleUrls: [ 'app/modules/header/header.component.css'],
	directives: [ SimpleSelectBoxComponent ]
})
export class HeaderComponent {}