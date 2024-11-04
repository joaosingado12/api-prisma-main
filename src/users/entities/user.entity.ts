import { User } from "@prisma/client";

export class UserEntity implements User {
    id: number;
    email: string;
    nome: string;
    senha: string;
    createAt: Date;
    updateAt: Date;
}
