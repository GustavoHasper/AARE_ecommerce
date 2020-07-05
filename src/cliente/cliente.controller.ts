import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteDto } from './cliente.dto';
import { Cliente } from './cliente.entity';
import { plainToClass } from "class-transformer";

@Controller('clientes')
export class ClienteController {

    constructor(private readonly service: ClienteService){}

    @Post()
    save(@Body() clienteDto: ClienteDto){
        const cliente = plainToClass(Cliente, clienteDto);
        return this.service.save(cliente);
    }

    @Get()
    findAll(){
        return this.service.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number){
        return this.service.findById(id);
    }

    @Put(":id")
    update(@Param('id') id: number, @Body() clienteDto: ClienteDto){
        clienteDto.id = id;
        const cliente = plainToClass(Cliente, clienteDto);
        
        return this.service.update(cliente);
    }

    @Delete(":id")
    delete(@Param('id') id: number){
        this.service.delete(id);
    }
}
