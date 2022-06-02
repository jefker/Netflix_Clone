import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputFilmeComponent } from 'src/app/components/input-filme/input-filme.component';
import { IFilmes } from 'src/app/core/interfaces/i-filmes';
import { FilmeService } from 'src/app/core/services/filme.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.css']
})

export class FilmesComponent implements OnInit {
  listarFilmes: IFilmes [] = []

  ref: DynamicDialogRef | undefined;
  id: string = '';
  dataSave = {} as IFilmes; //request - salvando dados na API

  constructor(
    private filmeService: FilmeService,
    public dialogService: DialogService,
    ) { }

  ngOnInit(): void {
    this.listarTodosFilmes();
  }

  listarTodosFilmes(){
    this.filmeService.listarTodosFilmes().subscribe(data => 
      {this.listarFilmes = data;
        console.log (data)
      });
  }

  cadastrarFilme(request: IFilmes) {
    this.filmeService.cadastrarFilme(request).subscribe(data => {
      this.listarTodosFilmes();
    });
  }
  
  showDynamicDialog(id?: string) {
    if (id) {
      this.id = id;
    };

    this.ref = this.dialogService.open(InputFilmeComponent, {
      header: 'Cadastrar Cliente',
      width: '50%',
      height: '55%'
    });

    this.ref.onClose.subscribe(data => {
      if (data){
        this.dataSave = data;
        // this.confirmacaoDialog(op, id);
      }})    
  }
}
