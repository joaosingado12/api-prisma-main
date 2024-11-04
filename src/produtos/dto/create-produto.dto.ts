import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateProdutoDto {

  @IsNotEmpty()
  @IsString()
  nome: string;
  @IsNotEmpty()
  @IsString()
  descricao: string;
  @IsNotEmpty()
  @IsNumber()
  preco:  number;
  @IsNotEmpty()
  @IsNumber()
  quantidade: number;
  @IsNotEmpty()
  @IsString()
  codbarras: string;
  @IsNotEmpty()
  @IsString()
  lote: string;
  @IsNotEmpty()
  @IsNumber()
  fornecedorId: number;
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}