import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OffercitiComponent } from '../offerciti/offerciti.component';
import { LoginComponent } from '../../../app/modules/login/login.component';
import { routing } from '../../shared/modules/route.component';


@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ OffercitiComponent, LoginComponent ],
    bootstrap: [ OffercitiComponent ]
})
export class OffercitiModule {}