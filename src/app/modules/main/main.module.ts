import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { OffercitiComponent } from '../offerciti/offerciti.component';
import { LoginComponent } from '../../../app/modules/login/login.component';
import { SignupComponent } from '../../../app/modules/signup/signup.component';
import { routing } from '../../shared/modules/route.component';

@NgModule({
    imports: [ BrowserModule, routing, HttpModule, FormsModule ],
    declarations: [ OffercitiComponent, LoginComponent, SignupComponent ],
    bootstrap: [ OffercitiComponent ]
})
export class OffercitiModule {}