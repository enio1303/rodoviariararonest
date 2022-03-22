import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Companhia } from "./CompanhiaEntity";
import { Viagem } from "./ViagemEntity";


@Entity()
export class Onibus {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    assentos: number;

    @ManyToOne(() => Companhia, (companhia) => companhia.onibus)
    companhia: Companhia;

    @OneToMany(() => Viagem, (viagem) => viagem.onibus)
    viagem: Viagem[];

   
}
