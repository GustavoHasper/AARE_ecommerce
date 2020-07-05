import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { ItemPedido } from "src/item-pedido/itemPedido.entity";

@Entity()
export class Produto{
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "varchar" })
    nome: String;

    @Column({type: "varchar" })
    descrição: String;

    @Column({name: 'preço',  type: "money" })
    preco: number;

    @Column({type: "int" })
    estoque: number

    @Column({name: 'data-de-validade',  type: "date" })
    dataValidade: Date;

    @Column({name: 'unidade-de-medida',  type: "varchar" })
    unidadeMedida: String;
    
    @OneToMany(() => ItemPedido, item => item.produto_id)
    itensPedidos: ItemPedido[];  
}