import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    { path : '', component: HomeComponent },
    { path : 'sign-in', component: SignInComponent },
    { path : 'login', component: LoginComponent },
    { path : 'about-us', component: AboutUsComponent }
];
