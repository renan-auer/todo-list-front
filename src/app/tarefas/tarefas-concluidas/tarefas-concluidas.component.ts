import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../tarefa.service';

declare var $ : any;


@Component({
  selector: 'app-tarefas-concluidas',
  templateUrl: './tarefas-concluidas.component.html',
  styleUrls: ['./tarefas-concluidas.component.css']
})
export class TarefasConcluidasComponent implements OnInit {

  status = "CONCLUIDO";
  isCollapseTarefa = false;
  tarefaEdicao = null;

  tarefas = []
  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.getTarefas();
  }


  getTarefas(){
    this.tarefaService.getTarefas("CONCLUIDO").subscribe((data : any)=>{
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

  updateStatus(data){
    this.tarefaService.alterarStatus(data).subscribe(data=>this.getTarefas())
  }

}
