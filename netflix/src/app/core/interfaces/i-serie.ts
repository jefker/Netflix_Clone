import { IGenero } from "./i-genero"

export interface ISerie {
    id?: number
    titulo: string
    anoLancamento: number
    tmeporadas: number
    genero: IGenero
}
