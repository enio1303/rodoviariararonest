import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bilhete } from "./BilheteEntity";


@Entity()
export class Passageiro {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    hashSenha: string;

    @Column()
    email: string;

    @OneToMany(() => Bilhete, (bilhete) => bilhete.passageiro)
    bilhetes: Bilhete[];

}
