import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserEntity } from './entities/user.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private readonly prisma : PrismaService){}
  async create(createUserDto: CreateUserDto) : Promise<UserEntity> {
    return this.prisma.user.create({data:createUserDto});
  }

  async findAll() : Promise<UserEntity[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) : Promise<UserEntity> {
    const userExiste = await this.prisma.user.findUnique({where:{id}})

    console.log(userExiste)
    if(!userExiste){
      throw new NotFoundException(`User where id:${id} Not found`)
    }

    return userExiste;
  }

  async update(id: number, updateUserDto: UpdateUserDto) : Promise<UserEntity> {
    return this.prisma.user.update({where:{id}, data: updateUserDto});
  }

  async remove(id: number) : Promise<UserEntity> {
    return this.prisma.user.delete({where:{id}});
  }
}
