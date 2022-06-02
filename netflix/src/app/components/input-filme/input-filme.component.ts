import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IFilmes } from 'src/app/core/interfaces/i-filmes';
import { FilmeService } from 'src/app/core/services/filme.service';

@Component({
  selector: 'app-input-filme',
  templateUrl: './input-filme.component.html',
  styleUrls: ['./input-filme.component.css']
})
export class InputFilmeComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private formG: FormBuilder, private filmeService: FilmeService) {
    this.formGroup = this.formG.group({
      titulo: this.formG.control(''),
      diretor: this.formG.control(''),
      anoLancamento: this.formG.control(''),
      genero: this.formG.control(''),
    })
  }

  salvarDados(){
    const valor = this.formGroup.value;
    const request: IFilmes = {
      titulo: valor.titulo,
      diretor: valor.diretor,
      anoLancamento: valor.anoLancamento,
      genero: valor.genero,
    };

    this.filmeService.cadastrarFilme(request).subscribe();
  }

  ngOnInit(): void {
  }

}
