import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'login', 
    loadChildren:()=> import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  { 
    path: 'welcome', 
    loadChildren:()=> import('./features/welcome/welcome.module').then(m => m.WelcomeModule)
  },
  { 
    path: 'regista', 
    loadChildren:()=> import('./features/regista/regista.module').then(m => m.RegistaModule)
  },
  { 
    path: 'film', 
    loadChildren:()=> import('./features/film/film.module').then(m => m.FilmModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
