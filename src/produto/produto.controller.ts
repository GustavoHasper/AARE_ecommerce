import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoDto } from './produto.dto';
import { Produto } from './produto.entity';
import { plainToClass } from "class-transformer";

@Controller('produtos')
export class ProdutoController {

    constructor(private readonly service: ProdutoService){}

    @Post()
    save(@Body() produtoDto: ProdutoDto){
        const produto = plainToClass(Produto, produtoDto);
        return this.service.save(produto);
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
    update(@Param('id') id: number, @Body() produtoDtoDto: ProdutoDto){
        produtoDtoDto.id = id;

        const produto = plainToClass(Produto, produtoDtoDto);
        return this.service.update(produto);
    }

    @Delete(":id")
    delete(@Param('id') id: number){
        this.service.delete(id);
    }
}
