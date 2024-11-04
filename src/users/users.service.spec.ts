import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { UsersService } from './users.service';
import { userMock } from './mocks';
import { NotFoundException } from '@nestjs/common';

describe('UsersService', () => {
  let service: UsersService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, PrismaService],
    }).compile();

    service = module.get<UsersService>(UsersService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {

    expect(service).toBeDefined();
    expect(prismaService).toBeDefined();
  });

  it('should be create user', async() => {

    jest.spyOn(prismaService.user, 'create').mockResolvedValue(userMock);

    const result = await service.create(userMock)
    expect(result).toEqual(userMock)
    
  });

  it('should be update user', async() => {

    jest.spyOn(prismaService.user, 'update').mockResolvedValue(userMock);

    const result = await service.update(1, userMock)
    expect(result).toEqual(userMock)
    
  });

  it('should be find one by id', async() => {

    jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(userMock);

    const result = await service.findOne(1)
    expect(result).toEqual(userMock)
    

  });
  it('should return an error', async () => {
    // Simula que o método findUnique retorna undefined
    jest.spyOn(prismaService.user, 'findUnique').mockResolvedValue(undefined);

    // Verifica se a chamada para findOne lança a exceção
    await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
});

});
