import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistaListComponent } from './regista-list/regista-list.component';
import { RegistaCreateComponent } from './regista-create/regista-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistaDetailComponent } from './regista-detail/regista-detail.component';

const routes: Routes = [
  {
    path: 'list',
    component: RegistaListComponent
  },
  {
    path: 'create',
    component: RegistaCreateComponent
  },
  {
    path: 'detail/:id',
    component: RegistaDetailComponent
  },
  {
    path: '',
    redirectTo:'list',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    RegistaListComponent,
    RegistaCreateComponent,
    RegistaDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RegistaModule { }
