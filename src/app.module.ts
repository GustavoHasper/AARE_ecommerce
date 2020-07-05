import { Module, HttpService, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { Cliente } from './cliente/cliente.entity';
import { Produto } from './produto/produto.entity';
import { Pedido } from './pedido/pedido.entity';
import { PedidoController } from './pedido/pedido.controller';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { PedidoService } from './pedido/pedido.service';
import { ItemPedido } from './item-pedido/itemPedido.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bruno1342',
      database: 'webservice-ecommerce',
      entities: [ 
        Cliente, 
        Produto, 
        Pedido,
        ItemPedido
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([ 
      Cliente, 
      Produto, 
      Pedido,
      ItemPedido
    ]),
    HttpModule
  ],
  controllers: [
    AppController, 
    ClienteController,
    ProdutoController,
    PedidoController
  ],
  providers: [
    AppService, 
    ClienteService,
    ProdutoService,
    PedidoService
  ],
})
export class AppModule {}
