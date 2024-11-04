import { Injectable } from '@nestjs/common';
import { CreateFornecedoreDto } from './dto/create-fornecedore.dto';
import { UpdateFornecedoreDto } from './dto/update-fornecedore.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { FornecedorEntity } from './entities/fornecedore.entity';

@Injectable()
export class FornecedoresService {
  constructor(private readonly prisma : PrismaService){}
  async create(createFornecedoreDto: CreateFornecedoreDto) : Promise<FornecedorEntity> {
    return this.prisma.fornecedor.create({data:createFornecedoreDto});
  }

  async findAll() : Promise<FornecedorEntity[]> {
    return this.prisma.fornecedor.findMany();
  }

  async findOne(id: number) : Promise<FornecedorEntity> {
    return this.prisma.fornecedor.findUnique({where:{id}});
  }

  async update(id: number, updateFornecedoreDto: UpdateFornecedoreDto) : Promise<FornecedorEntity> {
    return this.prisma.fornecedor.update({where:{id}, data: updateFornecedoreDto});
  }

  async remove(id: number) : Promise<FornecedorEntity> {
    return this.prisma.fornecedor.delete({where:{id}});
  }
}
