import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

    constructor(
        @InjectRepository(Cliente)
        private readonly repositiry: Repository<Cliente>){}

    save(cliente: Cliente){
        return this.repositiry.save(cliente);
    }

    findAll(){
        return this.repositiry.find();
    }

    findById(id: number){
        return this.repositiry.findOne(id);
    }

    update(cliente: Cliente){
        return this.repositiry.update(cliente.id, cliente);
    }

    delete(id: number){
        return this.repositiry.delete(id);
    }
}
