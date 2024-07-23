import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { WrapupComponent } from './modules/wrapup/wrapup.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'been', component: WorldMapComponent },
  { path: 'wrapup', component: WrapupComponent },
];
