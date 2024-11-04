import { Module } from '@nestjs/common';
import { FornecedoresService } from './fornecedores.service';
import { FornecedoresController } from './fornecedores.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [FornecedoresController],
  providers: [FornecedoresService, PrismaService],
})
export class FornecedoresModule {}
