import { IFilmes } from "./i-filmes"
import { ISerie } from "./i-serie"

export interface IGenero {
    id?: number
    nome: string
    descricao: string
    listaFilmes: IFilmes
    listaSerie: ISerie
}
