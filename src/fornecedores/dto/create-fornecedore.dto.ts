import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFornecedoreDto {
    @IsNotEmpty()
    @IsString()
    nome:  string;
    @IsNotEmpty()
    @IsEmail()
    email: string;
    @IsNotEmpty()
    @IsString()
    cnpj: string;
    @IsNotEmpty()
    @IsString()
    endereco: string;
    @IsNotEmpty()
    @IsString()
    telefone: string;
    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
