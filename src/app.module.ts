import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [UsersModule, FornecedoresModule, ProdutosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
