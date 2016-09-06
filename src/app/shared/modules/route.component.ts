import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../../../app/modules/login/login.component';
import { SignupComponent } from '../../../app/modules/signup/signup.component';

const offerCitiRoutes = [{
	path: 'advertiser-login',
	component: LoginComponent
}, {
	path: 'advertiser-signup',
	component: SignupComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(offerCitiRoutes);