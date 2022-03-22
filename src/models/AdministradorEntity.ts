import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class Administrador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    hashSenha: string;

    @Column()
    email: string;
}
