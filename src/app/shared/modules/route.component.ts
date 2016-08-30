import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../../app/modules/login/login.component';

const offerCitiRoutes = [{
	path: 'advertiser-login',
	component: LoginComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(offerCitiRoutes);