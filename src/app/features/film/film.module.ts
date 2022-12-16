import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCreateComponent } from './film-create/film-create.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'list',
    component: FilmListComponent
  },
  {
    path: 'create',
    component: FilmCreateComponent
  },
  {
    path: 'detail/:id',
    component: FilmDetailComponent
  },
  {
    path: '',
    redirectTo:'list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    FilmListComponent,
    FilmCreateComponent,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilmModule { }
