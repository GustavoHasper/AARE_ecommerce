import { IsString, MaxLength, MinLength, isEmpty, IsNumber, IsDate } from "class-validator";
import { Cliente } from "src/cliente/cliente.entity";
import { Type } from "class-transformer";

export class PedidoDto{

    id: number;

    @IsNumber()
    codigo: number;
    
    @IsDate()
    @Type(() => Date)
    dataPedido: Date;

    @IsDate()
    @Type(() => Date)
    dataEntregaPrevista: Date;

    @IsString()
    @MaxLength(150, {message: 'O campo Transportadora pode  conter no máximo 150 caracteres.'})
    transportadora: String;
    
    @IsNumber()
    valorTotal: number;
    
    @IsNumber()
    valorProdutos: number;
    
    @IsNumber()
    valorDescontos: number;
    
    cliente: Cliente;
    
    @IsString()
    @MaxLength(150, {message: 'O campo Transportadora pode  conter no máximo 150 caracteres.'})
    endereçoEntrega: String;
    
}