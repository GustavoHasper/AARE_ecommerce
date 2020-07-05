import { IsString, MaxLength, MinLength, isEmpty, IsNumber, IsDate } from "class-validator";

export class ProdutoDto{

    id: number;

    @IsString({ message: 'Nome inválido!' })
    @MaxLength(150, { message: 'O campo nome pode conter no máximo 150 caracteres.' })
    nome: string;

    @IsString({ message: 'CPF inválido!' })
    @MaxLength(650, { message: 'O campo Descrição pode conter no máximo 650 caracteres.' })
    descrição: string;

    @IsNumber()
    preco: number;

    @IsNumber()
    estoque: string;

    @IsDate()
    dataValidade: string;

    @IsString({ message: 'A Unidade é inválida!' })
    @MaxLength(2, { message: 'A Unidade de Medida pode conter no máximo 2 caracteres.' })
    unidadeMedida: string;

}