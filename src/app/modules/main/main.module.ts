import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OffercitiComponent } from '../offerciti/offerciti.component';
import { routing } from '../../shared/modules/route.component';


@NgModule({
    imports: [ BrowserModule, routing ],
    declarations: [ OffercitiComponent ],
    bootstrap: [ OffercitiComponent ]
})
export class OffercitiModule {}