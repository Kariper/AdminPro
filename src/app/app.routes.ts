
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
{path: '',
component: PagesComponent,
children: [
{path: 'dashboard', component: DashboardComponent},
{path: 'progress', component: ProgressComponent},
{path: 'graphics1', component: Graphics1Component}
],
},
{path: 'login', component: LoginComponent},
{path: 'register', component: RegisterComponent},
{path: '**', component: PagenotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
