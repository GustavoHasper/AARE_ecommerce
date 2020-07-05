import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {

    constructor(
        @InjectRepository(Produto)
        private readonly repositiry: Repository<Produto>){}

    save(produto: Produto){
        return this.repositiry.save(produto);
    }

    findAll(){
        return this.repositiry.find();
    }

    findById(id: number){
        return this.repositiry.findOne(id);
    }

    update(produto: Produto){
        return this.repositiry.update(produto.id, produto);
    }

    delete(id: number){
        return this.repositiry.delete(id);
    }
}
