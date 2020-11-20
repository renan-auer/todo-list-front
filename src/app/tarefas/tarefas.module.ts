import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {TarefasRoutingModule} from './tarefas-routing.module'

import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { TarefasConcluidasComponent } from './tarefas-concluidas/tarefas-concluidas.component';

@NgModule({
  declarations: [
    TarefasPendentesComponent,
    TarefasConcluidasComponent
  ],
  imports: [
    RouterModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
