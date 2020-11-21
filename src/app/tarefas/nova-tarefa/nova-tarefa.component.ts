import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.component.html',
  styleUrls: ['./nova-tarefa.component.css']
})
export class NovaTarefaComponent implements OnInit {

  formulario: FormGroup
  isSubmitted: boolean

  @Input() tarefaEdicao;
  @Input() status;
  @Output() salvou = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.preparaForm(this.tarefaEdicao)
  }

  
  ngOnChanges(changes: SimpleChanges) {
    if(changes.tarefaEdicao.currentValue){
      this.preparaForm(changes.tarefaEdicao.currentValue)
    }
  }

  preparaForm(tarefa?) {
    this.formulario = this.formBuilder.group({
      id: [tarefa ? tarefa.id : null],
      descricao: [tarefa ? tarefa.descricao : null, Validators.required],
      prazo: [tarefa ? tarefa.prazo : null, Validators.required],
      status: [tarefa ? tarefa.status : this.status, Validators.required]
    })
  }

  submit() {
    this.isSubmitted = true;
    
    if (!this.formulario.valid)
      return;

    this.saveOrUpdate(this.formulario.value).subscribe(data=>{
      this.salvou.emit();
    })
  }

  saveOrUpdate(tarefa) {
    if (tarefa.id)
      return this.tarefaService.editarTarefa(tarefa);
    return this.tarefaService.salvarTarefas(tarefa);
  }

  get f(){return this.formulario.controls}
}
