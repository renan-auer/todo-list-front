import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

declare var $ : any;


@Component({
  selector: 'app-tarefas-pendentes',
  templateUrl: './tarefas-pendentes.component.html',
  styleUrls: ['./tarefas-pendentes.component.css']
})
export class TarefasPendentesComponent implements OnInit {

  isCollapseTarefa = false;
  tarefaEdicao = null;
  status = "PENDENTE";
  tarefas = []
  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.getTarefas();
  }

  getTarefas(){
    this.tarefaService.getTarefas(this.status).subscribe((data : any)=>{
      this.tarefas = data
    })
  }


  novaTarefa(){
    this.isCollapseTarefa = !this.isCollapseTarefa;
    this.tarefaEdicao = null;
    $('#nova-tarefa').collapse()
  }

  editarTarefa(tarefa){
    this.tarefaEdicao = tarefa;
    this.isCollapseTarefa = true;
    $('#nova-tarefa').collapse()
  } 

  deletarTarefa(id){
    console.log(id)
    this.tarefaService.deletarTarefa(id).subscribe(data=> this.getTarefas())
  }

}
