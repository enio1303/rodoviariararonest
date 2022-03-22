import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Companhia } from "./CompanhiaEntity";
import { Passageiro } from "./PassageiroEntity";
import { Viagem } from "./ViagemEntity";


@Entity()
export class Bilhete {
    @PrimaryGeneratedColumn()
    id: number;


    @ManyToOne(() => Passageiro, (passageiro) => passageiro.bilhetes)
    passageiro: Passageiro;

    @ManyToOne(() => Viagem, (viagem) => viagem.bilhetes)
    viagem: Viagem;

    @Column()
    valor: number

    @Column()
    ativo: boolean

    @Column()
    cancelado: boolean

    
}
