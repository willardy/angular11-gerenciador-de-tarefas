import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();
    if (confirm('Deseja remover a tarefa ' + tarefa.nome + '?')){
      if (tarefa.id != null) {
        this.tarefaService.remover(tarefa.id);
        this.tarefas = this.listarTodos();
      }
    }
  }

  alterarStatus(tarefa: Tarefa): void {
    console.log(tarefa.id);
    if(confirm('Deseja alterar a tarefa ' + tarefa.nome + '?')){
      if (tarefa.id != null) {
        this.tarefaService.alterarStatus(tarefa.id);
        this.tarefas = this.listarTodos();
      }
    }
  }
}
