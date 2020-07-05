import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Pedido } from "src/pedido/pedido.entity";

@Entity()
export class Cliente{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar'})
    nome: string;

    @Column({type: 'varchar'})
    cpf: string;

    @Column({type: 'varchar'})
    rg: string;

    @Column({type: 'varchar'})
    endereco: string;

    @Column({type: 'varchar'})
    bairro: string;

    @Column({type: 'varchar'})
    cidade: string;

    @Column({type: 'varchar'})
    cep: string;
    
    @OneToMany(() => Pedido, pedido => pedido.cliente)
    pedidos: Pedido[];
}