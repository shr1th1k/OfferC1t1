import { Component, OnInit } from '@angular/core';
//import $ from "jquery";

@Component({
	selector: 'simple-selectbox',
	templateUrl: 'app/shared/components/selectbox/selectbox.component.html',
	styleUrls: [ 'app/shared/components/selectbox/selectbox.component.css']
})
export class SimpleSelectBoxComponent implements OnInit {
	ngOnInit() {
		//alert("Something");
		//$('.selectpicker').html("SANTOSH").show();
	}
}	