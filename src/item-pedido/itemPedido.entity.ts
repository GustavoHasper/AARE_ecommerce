import { PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinColumn, Entity } from "typeorm";
import { Produto } from "src/produto/produto.entity";
import { Pedido } from "src/pedido/pedido.entity";

@Entity()
export class ItemPedido{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Produto, produto => produto.itensPedidos)
    @JoinColumn({ name: 'produto_id' })
    produto: Produto;

    @ManyToMany(() => Pedido, pedido => pedido.itens)
    @JoinColumn({ name: 'pedido_id' })
    pedido: Pedido;

    @Column()
    produto_id: number;
    
    @Column()
    pedido_id: number;

    @Column({ type: "int" })
    quantidade: number;
    
    @Column({ name: 'valor-unitário', type: "money" })
    valorUnitario: number;
    
    @Column({ name: 'valor-total', type: "money" })
    valorTotal: number;
}