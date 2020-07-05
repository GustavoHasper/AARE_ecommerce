import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, ManyToOne } from "typeorm";
import { Cliente } from "src/cliente/cliente.entity";
import { ItemPedido } from "src/item-pedido/itemPedido.entity";

@Entity()
export class Pedido{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'código',  type: "int" })
    codigo: number;
    
    @Column({name: 'data-do-pedido', type: 'date'})
    dataPedido: Date;

    @Column({name: 'data-de-entrega-prevista', type: 'date'})
    dataEntregaPrevista: Date;
    
    @Column({type: 'varchar'})
    transportadora: String;
    
    @Column({name: 'valor-total', type: 'money'})
    valorTotal: number;
    
    @Column({name: 'valor-dos-produtos', type: 'money'})
    valorProdutos: number;
    
    @Column({name: 'valor-dos-descontos', type: 'money'})
    valorDescontos: number;
    
    @ManyToOne(() => Cliente, cliente => cliente.pedidos, {eager: true})
    @JoinColumn({name: 'cliente_id'})
    cliente: Cliente;
    
    @Column()
    cliente_id: number;

    @OneToMany(() => ItemPedido, itens => itens.pedido, {
        cascade: true, 
        eager:true
    })
    itens: ItemPedido[];
    
    @Column({name: 'endereço-de-entrega', type: 'varchar'})
    enderecoEntrega: String;
    
}