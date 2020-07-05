import { Controller, Post, Body, Get, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoDto } from './pedido.dto';
import { Pedido } from './pedido.entity';
import { plainToClass } from "class-transformer";

@Controller('pedidos')
export class PedidoController {

    constructor(private readonly service: PedidoService) {}

    @Post()
    save(@Body() pedidoDto: PedidoDto){
        const pedido = plainToClass(Pedido, pedidoDto);
        return this.service.save(pedido);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number){   
        if (!this.service.findById(id)) {
            throw new HttpException('Pedido não foi Encontrado!', HttpStatus.NOT_FOUND);
        }
        
        return this.service.findById(id);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() pedidoDto: PedidoDto){
        if (!this.service.findById(id)) {
            throw new HttpException('Pedido não foi Encontrado!', HttpStatus.NOT_FOUND);
        }
        
        pedidoDto.id = id;
        const pedido = plainToClass(Pedido, pedidoDto);
        
        return this.service.update(pedido);
    }

    @Delete(":id")
    delete(@Param('id') id: number){
        if (!this.service.findById(id)) {
            throw new HttpException('Pedido não foi Encontrado!', HttpStatus.NOT_FOUND);
        }

        this.service.delete(id);
    }
}
