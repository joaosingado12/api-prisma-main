import { Produto } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class ProdutoEntity implements Produto {
    id: number;
    nome: string;
    descricao: string;
    preco:  Decimal;
    quantidade: number;
    codbarras: string;
    lote: string;
    createAt: Date;
    updateAt: Date;
    fornecedorId: number;
    userId: number;
}
