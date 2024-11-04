import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsString()
    @IsStrongPassword()
    senha: string;
}
