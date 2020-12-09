import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TAREFASROUTES} from './tarefas';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TAREFASROUTES
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
