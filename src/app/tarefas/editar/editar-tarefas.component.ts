import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Tarefa, TarefaService} from '../shared';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar-tarefas',
  templateUrl: './editar-tarefas.component.html',
  styleUrls: ['./editar-tarefas.component.css']
})
export class EditarTarefasComponent implements OnInit {

  @ViewChild('formTarefa') formTarefa!: NgForm;
  tarefa !: Tarefa;

  constructor(private tarefaService: TarefaService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar(): void {
    if (this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }

}
