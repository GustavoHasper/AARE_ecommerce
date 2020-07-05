import { IsString, MaxLength, MinLength, isEmpty } from "class-validator";

export class ClienteDto{

    id: number;

  
    @IsString({ message: 'Este nome não é válido' })
    @MaxLength(50, { message: 'O campo nome deve conter no máximo 50 caracteres.' })
    nome: string;
    
    @IsString({ message: 'Este CPF não é válido' })
    // @MinLength(11, { message: 'O campo CPF deve ter no mínimo 11 caracteres.' })
    @MaxLength(11, { message: 'O campo CPF pode conter no máximo 11 caracteres.' })
    cpf: string;
   
    @IsString({ message: 'Este RG não é válido' })
    // @MinLength(9, { message: 'O campo do RG deve ter no mínimo 9 caracteres.' })
    @MaxLength(9, { message: 'O campo do RG pode conter no máximo 9 caracteres.' })
    rg: string;
    
    @IsString({ message: 'Este endereço não é valido' })
    @MaxLength(150, { message: 'O campo Endereço pode conter no máximo 150 caracteres.' })
    endereco: string;
    
    @IsString({ message: 'Este Bairro não é valido' })
    @MaxLength(150, { message: 'O campo Bairro pode conter no máximo 150 caracteres.' })
    bairro: string;
   
    @IsString({ message: 'Esta Cidade não é valida' })
    @MaxLength(150, { message: 'O campo Cidade pode conter no máximo 150 caracteres.' })
    cidade: string;
   
    @IsString({ message: 'Este CEP não é valido' })
    @MaxLength(150, { message: 'O campo Endereço pode conter no máximo 150 caracteres.' })
    cep: string;
}
