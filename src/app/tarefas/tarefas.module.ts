import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {TarefasRoutingModule} from './tarefas-routing.module'

import { TarefasPendentesComponent } from './tarefas-pendentes/tarefas-pendentes.component';
import { TarefasConcluidasComponent } from './tarefas-concluidas/tarefas-concluidas.component';
import { NovaTarefaComponent } from './nova-tarefa/nova-tarefa.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TarefasPendentesComponent,
    TarefasConcluidasComponent,
    NovaTarefaComponent,
    TarefaComponent
  ],
  imports: [
    RouterModule,
    HttpClientModule,
    TarefasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule 
  ]
})
export class TarefasModule { }
