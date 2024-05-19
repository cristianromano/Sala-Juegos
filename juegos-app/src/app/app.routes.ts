import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BioComponent } from './bio/bio.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {
    path: 'bio',
    loadComponent: () =>
      import('./bio/bio.component').then((m) => m.BioComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cartas',
    loadComponent: () =>
      import('./cartas/cartas.component').then((m) => m.CartasComponent),
  },
  {
    path: 'ahorcado',
    loadComponent: () =>
      import('./ahorcado/ahorcado.component').then((m) => m.AhorcadoComponent),
  },
];
