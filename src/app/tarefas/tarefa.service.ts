import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TarefaService {

    header = {headers : new HttpHeaders({ 'Content-Type': 'application/json' })};

    constructor(private http: HttpClient) { 
        
    }
    
    getTarefas(status) {
        return this.http.get("http://localhost:3000/tarefas/" + status);
    }

    salvarTarefas(tarefa) {
        return this.http.post("http://localhost:3000/tarefas", tarefa, this.header);
    }

    editarTarefa(tarefa) {
        return this.http.put("http://localhost:3000/tarefas", tarefa);
    }

    alterarStatus(data) {
        return this.http.put("http://localhost:3000/tarefas/status", data);
    }

    deletarTarefa(id) {
        return this.http.delete("http://localhost:3000/tarefas/" + id);
    }

}
