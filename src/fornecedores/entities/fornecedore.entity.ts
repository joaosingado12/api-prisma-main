import { Fornecedor } from "@prisma/client";

export class FornecedorEntity implements Fornecedor {
    id: number;
    nome:  string;
    email: string;
    cnpj: string;
    endereco: string;
    telefone: string;
    createAt: Date;
    updateAt: Date;
    userId: number;
}