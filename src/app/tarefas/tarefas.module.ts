import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {TarefasRoutingModule} from './tarefas-routing.module'

import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { TarefasConcluidasComponent } from './tarefas-concluidas/tarefas-concluidas.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';

@NgModule({
  declarations: [
    TarefasPendentesComponent,
    TarefasConcluidasComponent,
    NovaTarefaComponent
  ],
  imports: [
    RouterModule,
    TarefasRoutingModule
  ]
})
export class TarefasModule { }
