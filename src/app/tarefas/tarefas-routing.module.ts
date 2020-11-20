import { Routes } from '@angular/router';
import { RouterModule } from  '@angular/router';
import { NgModule } from '@angular/core';

import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { TarefasConcluidasComponent } from './tarefas-concluidas/tarefas-concluidas.component';

const routes: Routes = [
    { path: 'pendentes', component: TarefasPendentesComponent },
    { path: 'concluidas', component: TarefasConcluidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TarefasRoutingModule { }