import { Injectable } from '@angular/core';

import {Tarefa} from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage.tarefas;
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    this.atualizarLocalStorage(tarefas);
  }

  buscarPorId(id: number): Tarefa{
    const tarefas: Tarefa[] = this.listarTodos();
    // @ts-ignore
    return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if (tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });

    this.atualizarLocalStorage(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    this.atualizarLocalStorage(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((value, index, array) => {
      if (value.id === id) {
        array[index].concluida = !value.concluida;
      }
    });
    this.atualizarLocalStorage(tarefas);
  }

  private atualizarLocalStorage(tarefas: Tarefa[]): void {
    localStorage.tarefas = JSON.stringify(tarefas);
  }

}
