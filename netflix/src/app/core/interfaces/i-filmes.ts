import { IGenero } from "./i-genero"

export interface IFilmes {
    id?: number
    titulo: string
    diretor: string
    anoLancamento: number
    genero: IGenero
}
