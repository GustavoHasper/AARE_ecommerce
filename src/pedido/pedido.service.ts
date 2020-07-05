import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PedidoService {

    constructor(
        @InjectRepository(Pedido)
        private readonly pedidoRepositiry: Repository<Pedido>){}

    save(pedido: Pedido){
        return this.pedidoRepositiry.save(pedido);
    }

    findAll(){
        return this.pedidoRepositiry.find();
    }

    findById(id: number){
        return this.pedidoRepositiry.findOne(id);
    }

    update(pedido: Pedido){
        return this.pedidoRepositiry.update(pedido.id, pedido);
    }

    delete(id: number){
        return this.pedidoRepositiry.delete(id);
    }

    
}
