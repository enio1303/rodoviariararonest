import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Companhia } from "./CompanhiaEntity";


@Entity()
export class Funcionario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    hashSenha: string;

    @Column()
    email: string;

    @ManyToOne(() => Companhia, (companhia) => companhia.funcionarios)
    companhia: Companhia;

   
}
