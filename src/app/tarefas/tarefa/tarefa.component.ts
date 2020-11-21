import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  constructor() { }

  @Input() tarefa;
  @Output() editar = new EventEmitter();  
  @Output() deletar = new EventEmitter();  
  @Output() status = new EventEmitter();  

  ngOnInit(): void {
  }

  editarTarefa(tarefa){
    this.editar.emit(tarefa);
  }

  deletarTarefa(tarefa){
    this.deletar.emit(tarefa.id);
  }

  toggleStatus(id, status){
    let newStatus = status === 'PENDENTE' ? "CONCLUIDO" : "PENDENTE";
    this.status.emit({
      id : id,
      status: newStatus
    })

  }

}
